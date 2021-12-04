const Workout = require('../models/Workout');
const User = require('../models/User');
const { nameValidation, numberValidation } = require('../validation/workoutsValidation');

const create = async (data, userId) => {
    let workoutName = nameValidation(data.workoutName);
    let date = new Date();
    let personalWeight = numberValidation(data.personalWeight);    

    let workout = new Workout({
        workoutName,
        date,
        personalWeight,
    });

    const user = await User.findById(userId);
    user.workouts.push(workout._id);

    await user.save();

    return await workout.save();
};

const pushExercise = async data => {
    let workoutId = data.workoutId;

    let currWorkout = await Workout.findById(workoutId);

    let exerciseName = nameValidation(data.exerciseName);
    let sets = data.exerciseSets;

    currWorkout.exercises.push({
        name: exerciseName,
        sets
    })

    return await currWorkout.save();
};

const pushDescriptionAndRating = async data => {
    const workoutId = data.workoutId;

    const currentWorkout = await Workout.findById(workoutId);

    currentWorkout.description = data.description;
    currentWorkout.rating = data.rating;

    console.log(currentWorkout);

    return await currentWorkout.save();
};

const getAll = async userId => {
    const user = await User.findById(userId).populate('workouts');

    const monthsArr = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

    const daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const resultArr = [];
    const yearsArr = [];

    const workoutsArr = [...user.workouts];

    workoutsArr.forEach(workout => {
        const workoutDate = new Date(workout.date);
        const year = workoutDate.getFullYear();
        const month = workoutDate.getMonth();
        const day = workoutDate.getDay();
        const date = workoutDate.getDate();

        let monthName = monthsArr[month];

        let yearIndex = 0;

        if(yearsArr.includes(year)) {
            yearIndex = resultArr.findIndex(x => x.year == year);

            if(resultArr[yearIndex].months[month]) {
                let currMonth = resultArr[yearIndex].months[month][monthName];

                let dateIndex = -1;
                
                for(let i = 0; i < currMonth.length; i++) {
                    if(!currMonth[i]) {
                        continue;
                    }

                    if(`${daysArr[day]} ${date}` == currMonth[i].date) {
                        dateIndex = i;
                        break;
                    }
                }

                
                if(dateIndex < 0) {
                    currMonth[date] = { date: `${daysArr[day]} ${date}`, workouts: [workout] };
                } else {
                    currMonth[dateIndex].workouts.push(workout);
                }
            } else {
                resultArr[yearIndex].months[month] = { [monthName]: [{ date: `${daysArr[day]} ${date}`, workouts: [workout] }] };
            }
        } else {
            yearsArr.push(year);
            resultArr.push({year, months: []});
            yearIndex = resultArr.findIndex(x => x.year == year);
            resultArr[yearIndex].months[month] = { [monthName]: [ { date: `${daysArr[day]} ${date}`, workouts: [workout] } ] }
        }
    });

    resultArr.forEach(year => {
        year.months = year.months.filter(x => x != null);

        year.months.forEach(month => {
            let [key, values] = Object.entries(month)[0];
            values = values.filter(x => x != null);

            month[key] = values;
        })
    })

    resultArr.forEach(year => {
        year.months.sort((a, b) => {
            let month1 = monthsArr.indexOf(Object.keys(a)[0]);
            let month2 = monthsArr.indexOf(Object.keys(b)[0]);

            return month2 - month1;
        });  

        year.months.map(monthObject => {
            const [monthName, datesArray] = Object.entries(monthObject)[0];

            datesArray.sort((a, b) => {
                const [, date1] = a.date.split(' ');
                const [, date2] = b.date.split(' ');
                return date2 - date1;
            });
        })
    })

    return resultArr;
};

module.exports = {
    create,
    pushExercise,
    getAll,
    pushDescriptionAndRating,
}