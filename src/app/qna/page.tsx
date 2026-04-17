"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "@/firebase-config";

const options = [
  "Strongly Agree",
  "Agree",
  "Neutral",
  "Disagree",
  "Strongly Disagree",
];

type Question = {
  Order: string,
  Question: string,
  Type: number
}

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<(string | null)[]>([]);
  const [direction, setDirection] = useState<"next" | "back">("next");

  async function fetchQuestions() {
    const questionData: Question[] = [];
    const q = query(collection(db, "personality_question"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      questionData.push(doc.data() as Question);
    });
    setQuestions([...questionData]);
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleSelect = (option: string) => {
    const newAnswers = [...answers];
    newAnswers[current] = option;
    setAnswers(newAnswers);

    // auto-next after 1 second
    setTimeout(() => {
      if (current < questions.length - 1) {
        setDirection("next");
        setCurrent(current + 1);
      }
    }, 1000);
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setDirection("next");
      setCurrent(current + 1);
    }
    else {
      console.log("calc");
    }
  };

  const handleBack = () => {
    if (current > 0) {
      setDirection("back");
      setCurrent(current - 1);
    }
  };

  if (questions.length === 0) return;

  return (
    <div style={{ fontFamily: "var(--font-poppins)" }} className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-green-200 via-white to-pink-300 px-4">
      <div className="relative w-full max-w-md">
        {/* Back Arrow */}
        {current > 0 && (
          <button
            onClick={handleBack}
            className="absolute top-3 left-3 z-20 text-gray-700 hover:text-black"
          >
            <FiArrowLeft size={22} />
          </button>
        )}

        {/* Card Animation */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ x: direction === "next" ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === "next" ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-6 relative"
          >
            {/* Progress */}
            <div className="flex justify-end items-center text-sm text-gray-500 mb-4">
              <span>
                {current + 1} / {questions.length}
              </span>
            </div>

            {/* Question */}
            <h2 className="text-base font-medium text-gray-900 mb-6">
              {questions[current].Question}
            </h2>

            {/* Options */}
            <div className="space-y-3">
              {options.map((option, index) => (
                <label
                  key={index}
                  className={`flex items-center space-x-3 cursor-pointer p-2 rounded-lg transition ${answers[current] === option ? "bg-green-100 font-semibold" : ""
                    }`}
                >
                  <input
                    type="radio"
                    name={`q-${current}`}
                    checked={answers[current] === option}
                    onChange={() => handleSelect(option)}
                    className="w-5 h-5 border-gray-400 text-black focus:ring-black"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="h-1 bg-gray-200 rounded-full mt-6">
              <div
                className="h-1 bg-green-500 rounded-full transition-all"
                style={{
                  width: `${((current + 1) / questions.length) * 100}%`,
                }}
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              <button
                onClick={handleBack}
                disabled={current === 0}
                className={`px-4 py-2 rounded-lg bg-gray-300 text-gray-700 hover:bg-gray-400 disabled:opacity-50`}
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={current === questions.length - 1}
                className={`px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 disabled:opacity-50`}
              >
                {current === questions.length - 1 ? 'Submit' :
                  'Next'}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

//   var count1 = 0
//   var count2 = 0
//   var count3 = 0
//   var count4 = 0

//   for (i in 0 until data!!.size) {
//       println(
//           "Gaur" +
//                   "data " + data!![i].selectedValue + " " + data!![i].type + " " + count3
//       )
//       when (data!![i].type) {

//           "1" -> {
//               count1 = data!![i].selectedValue + count1
//           }

//           "2" -> {
//               count2 = data!![i].selectedValue + count2
//           }

//           "3" -> {
//               count3 = data!![i].selectedValue + count3
//           }
//           "4" -> {
//               count4 = data!![i].selectedValue + count3
//           }
//       }
//   }

//   val type1 = (count1 ) //15 19 22
//   val type2 = (count2 )
//   val  type3 = (count3 )
//   val  type4 = (count4 )


//   val sum = type1+type2+type3+type4

//  // println("score value "+goodnessScoref+" "+passionScoref+" "+ignoranceScoref+" "+sum)

//   println("score value  final "+(type1*100/sum )+" "+(type2*100/sum )+" "+ (type3*100/sum )+" "+(type4*100/sum ))




//   // navigator.currentScreen= Screen.ModesScore((goodnessScoref*100/sum ), (passionScoref*100/sum ), (ignoranceScoref*100/sum ))

//   val personalityData = PersonalityData(
//       type1 = type1 * 100 / sum,
//       type2 = type2 * 100 / sum,
//       type3 = type3 * 100 / sum,
//       type4 = type4 * 100 / sum
//   )

//   val jsonString = Json.encodeToString(personalityData)

// //                                json.put("type1", (type1*100/sum ))
// //                                json.put("type2",  (type2*100/sum ))
// //                                json.put("type3",  (type3*100/sum ))
// //                                json.put("type4",  (type4*100/sum ))
//   println("saved score data "+ jsonString)



//   coroutineScope.launch {
//       println("saved score data saved "+ jsonString)
//       prefs.setString(key = "personality_data", value = jsonString)
//       val login = prefs.getBoolean(ConstantandFunction.isLoggedIn, false)

//       if(login){

//         userRepository.savePersonalityData(jsonString, ConstantandFunction.userid)
//       }



//       ConstantandFunction.personlaityscore =true
//       ConstantandFunction.type1 = (type1 * 100 / sum)
//       ConstantandFunction.type2 = (type2 * 100 / sum)
//       ConstantandFunction.type3  =  (type3 * 100 / sum)
//       ConstantandFunction.type4  =  (type4 * 100 / sum)

//       navigator.push(
//           PersonalityResultDialog(
//               (type1 * 100 / sum),
//               (type2 * 100 / sum),
//               (type3 * 100 / sum),
//               (type4 * 100 / sum),
//               prefs,
//               data
//               , true
//           )
//       )
//     //  }
//    //   else{


//    //   }


//   }