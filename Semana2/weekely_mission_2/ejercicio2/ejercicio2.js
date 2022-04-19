const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
   console.log("1.-forEach name ")
   explorers.forEach(explorers => console.log(explorers.name))
   console.log("2.-forEach stack")
   explorers.forEach(stack => console.log(stack.stack))
   console.log("3.-Map stack")
   explorers.map(stack => console.log(stack.stack))
   console.log("4.-Filter")
   const js = explorers.filter( elementJs => elementJs.stack.includes('js'))
   console.log(js)
   console.log("5.- Find")
   const cdmx = explorers.find( cd => cd.city === "CDMX")
   console.log(cdmx)
   console.log("6.- Ejercicios completos!")
   const exercises = explorers.reduce((acc, exercises)=> acc + exercises.exercises_completed, 0)
   console.log(exercises)
   console.log("7.- Ejercicios finished.some() ")
   const isFinish = explorers.some(frontend => frontend.exercisesFinished === true)
   console.log(isFinish)
   console.log("8.- Finish.Every() ")
   const end = explorers.every(frontend => frontend.isFinish)
   if(end === true){
   console.log(end)
   }else(end ===false)
     console.log(end)
   