import Image from "next/image";
import {
  ust_logo,
  ustcics_logo,
  ustshs_logo,
} from "../../public/images/education";

// Temporary
const Education = () => {
  return (
    <div className="mt-8">
      <h1 className="font-bold text-3xl">Education</h1>
      <div className="mt-4 flex flex-col gap-y-4">
        <div>
          <div className="flex gap-x-4 justify-between w-[8rem]">
            <Image
              src={ust_logo}
              height={56}
              alt="University of Santo Tomas Logo"
            />
            <Image
              src={ustcics_logo}
              height={56}
              alt="University of Santo Tomas College of Information and Computing Sciences Logo"
            />
          </div>
          <h2 className="text-2xl">
            University of Santo Tomas, Bachelor of Science in Information
            Technology
          </h2>
          <ul>
            <li>Specialized in Web and Mobile Development</li>
            <li>
              <div>
                <h1>Part of the Dean&apos;s List in multiple occasions</h1>
                <p>
                  Recognized for outstanding academic performance by
                  consistently achieving a semestral average of at least 1.75.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h1>Top 3, Best Capstone Project</h1>
                <p>
                  Awarded for exceptional contribution to a capstone project
                  that demonstrated innovation and excellence in web and mobile
                  development.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h2>Senior Highschool Diploma</h2>
        </div>
        {/* TOOD: Make this card a component */}
        {/* <div className="outline outline-2 outline-gray-200 p-4 rounded-2xl flex justify-between items-center">
          <div>
            <h1 className="font-bold text-2xl text-[#37b47e]">
              University of Santo Tomas
            </h1>
            <h2 className="font-bold text-sm text-[#37b47e]">
              College of Information and Computing Sciences
            </h2>
            <h2 className="font-bold text-sm">
              Bachelor of Science in Information Technology,{" "}
              <span className="font-normal text-gray-400 italic text-sm">
                Specialization in Web and Mobile Development
              </span>
            </h2>
          </div>
          <div className="flex gap-x-4 justify-between w-[8rem]">
            <Image
              src={ust_logo}
              height={56}
              alt="University of Santo Tomas Logo"
            />
            <Image
              src={ustcics_logo}
              height={56}
              alt="University of Santo Tomas College of Information and Computing Sciences Logo"
            />
          </div>
        </div> */}
        <div className="outline outline-2 outline-gray-200 p-4 rounded-2xl flex justify-between items-center">
          <div>
            <h1 className="font-bold text-2xl text-[#37b47e]">
              University of Santo Tomas
            </h1>
            <h2 className="font-bold text-sm text-[#37b47e]">
              Senior High School
            </h2>
            <h2 className="font-bold text-sm">
              Accountacy, Business, and Management Strand
            </h2>
          </div>
          <div className="flex gap-x-4 justify-between w-[8rem]">
            <Image
              src={ust_logo}
              height={56}
              alt="University of Santo Tomas Logo"
            />
            <Image
              src={ustshs_logo}
              height={56}
              alt="University of Santo Tomas College of Information and Computing Sciences Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
