const { useState, useEffect } = React;

function MyStepper({ step }) {
  return (
    <div className="bs-stepper">
      <div className="bs-stepper-header" role="tablist">
        <div className="step" data-target="#logins-part">
          <span
            className={
              (step >= 1
                ? "bg-primary text-white"
                : "bg-body-secondary text-dark") + " bs-stepper-circle  m-3 "
            }
          >
            1
          </span>
        </div>
        <div className="line"></div>
        <div className="step" data-target="#information-part">
          <span
            className={
              (step >= 2
                ? "bg-primary text-white"
                : "bg-body-secondary text-dark") + " bs-stepper-circle  m-3 "
            }
          >
            2
          </span>
        </div>

        <div className="line"></div>
        <div className="step" data-target="#information-part">
          <span
            className={
              (step >= 3
                ? "bg-primary text-white"
                : "bg-body-secondary text-dark") + " bs-stepper-circle  m-3 "
            }
          >
            3
          </span>
        </div>

        <div className="line"></div>
        <div className="step" data-target="#information-part">
          <span
            className={
              (step >= 4
                ? "bg-primary text-white"
                : "bg-body-secondary text-dark") + " bs-stepper-circle  m-3 "
            }
          >
            4
          </span>
        </div>

        <div className="line"></div>
        <div className="step" data-target="#information-part">
          <span
            className={
              (step >= 5
                ? "bg-primary text-white"
                : "bg-body-secondary text-dark") + " bs-stepper-circle  m-3 "
            }
          >
            5
          </span>
        </div>
      </div>
      <div className="bs-stepper-content">
        <div
          id="logins-part"
          className="content"
          role="tabpanel"
          aria-labelledby="logins-part-trigger"
        ></div>
        <div
          id="information-part"
          className="content"
          role="tabpanel"
          aria-labelledby="information-part-trigger"
        ></div>
      </div>
    </div>
  );
}

function App() {
  const [finished, setfinished] = useState(false);
  const [step, setStep] = useState(1);
  const [email, setemail] = useState("");
  const [statu, setstatu] = useState("");
  const [duration, setduration] = useState("");
  const [age, setage] = useState("");
  const [expectation, setexpectation] = useState("");
  const [comment, setcomment] = useState("");
  const [gender, setgender] = useState("");
  const [gender_extra, setgender_extra] = useState("");
  const [edu, setedu] = useState("");
  const [edu_extra, setedu_extra] = useState("");
  const [city, setcity] = useState("");
  const [city_extra, setcity_extra] = useState("");
  const [occupation, setoccupation] = useState("");
  const [occupation_others, setoccupation_others] = useState("");
  const [organization, setorganization] = useState("");
  const [status, setstatus] = useState([
    "Select status",
    "Tourist",
    "Student",
    "Worker",
    "Permanent Resident",
    "Canadian Citizen",
    "Other",
  ]);
  const [durations, setdurations] = useState([
    "Select duration",
    "1-3 years",
    "3-5 years",
    "5-10 years",
    "10+ years",
    "I was born here",
  ]);
  const [ages, setages] = useState([
    "Select age group",
    "18-28",
    "25-34",
    "35-44",
    "45-54",
    "55-64",
    "65 or older",
  ]);
  const [genders, setgenders] = useState([
    "Select gender",
    "Man",
    "Woman",
    "Non-Binary",
    "Trans",
    "I don't want to answer",
    "Other",
  ]);
  const [edus, setedus] = useState([
    "Select education level",
    "High School",
    "Vocational School",
    "Bachelor",
    "Master",
    "Doctorate",
    "No official education",
    "Other",
  ]);

  const [occupations, setoccupations] = useState([
	"Select occupation",
	"Construction",
	"Education",
	"Finance",
	"Healthcare",
	"Hospitality and Tourism",
	"Information Technology",
	"Legal Services",
	"Manufacturing",
	"Marketing and Advertising",
	"Public Services",
	"Retail",
	"Transportation and Logistics",
	"Other",
  ]);

  const [cities, setcities] = useState([
    "Select city",
    "Brampton",
    "Burlington",
    "Calgary",
    "Edmonton",
    "Etobicoke",
    "Halifax",
    "Hamilton",
    "Markham",
    "Mississauga",
    "Montreal",
    "North York",
    "Oakville",
    "Ottawa",
    "Quebec City",
    "Richmond Hill",
    "Saskatoon",
    "Scarborough",
    "Toronto",
    "Vancouver",
    "Vaughan",
    "Other",
  ]);

  const [marital, setmarital] = useState("");
  const [marital_extra, setmarital_extra] = useState("");
  const [maritals, setmaritals] = useState([
	"Select status",
	"Single",
	"Married",
	"Divorced",
	"Engaged",
	"Common-law-partner",
	"Prefer not to answer",
	"Other",
  ]);

  const [child, setchild] = useState("");

  const [childs, setchilds] = useState([
	"Select",
	"I have children under 18",
	"I have adult children",
	"I have no children",
  ]);

  const [get_email, setget_email] = useState("");
  const [get_emails, setget_emails] = useState(["Select", "Yes", "No"]);

  const [languages, setlanguages] = useState("");

  const [turkish, setturkish] = useState(false);
  const [english, setenglish] = useState(false);
  const [french, setfrench] = useState(false);
  const [german, setgerman] = useState(false);
  const [russian, setrussian] = useState(false);
  const [spanish, setspanish] = useState(false);
  const [arabic, setarabic] = useState(false);
  const [chinese, setchinese] = useState(false);
  const [other_languages, setother_languages] = useState("");

  const [canada_edus, setcanada_edus] = useState("");

  const [edu_none, setedu_none] = useState(false);
  const [edu_canada, setedu_canada] = useState(false);
  const [edu_lise, setedu_lise] = useState(false);
  const [edu_yuksekokul, setedu_yuksekokul] = useState(false);
  const [edu_lisans, setedu_lisans] = useState(false);
  const [edu_ylisans, setedu_ylisans] = useState(false);
  const [edu_doktora, setedu_doktora] = useState(false);
  const [edu_others, setedu_others] = useState(false);

  const [work, setwork] = useState("");

  const [work_full, setwork_full] = useState(false);
  const [work_part, setwork_part] = useState(false);
  const [work_self, setwork_self] = useState(false);
  const [work_student, setwork_student] = useState(false);
  const [work_unemployed, setwork_unemployed] = useState(false);
  const [work_retired, setwork_retired] = useState(false);
  const [work_others, setwork_others] = useState("");

  useEffect(() => {
    let res = "";
    if (turkish) res += "Turkish, ";
    if (english) res += "English, ";
    if (french) res += "French, ";
    if (german) res += "German, ";
    if (russian) res += "Russian, ";
    if (spanish) res += "Spanish, ";
    if (arabic) res += "Arabic, ";
    if (chinese) res += "Chinese, ";
    if (other_languages) res += "- " + other_languages;
    setlanguages(res);
  }, [
    english,
    french,
    german,
    russian,
    spanish,
    arabic,
    chinese,
    other_languages,
  ]);

  useEffect(() => {
    let res = "";
    if (edu_none) res += "None , ";
    if (edu_canada) res += "Entirety of my education was in Canada, ";
    if (edu_lise) res += "High School, ";
    if (edu_yuksekokul) res += "Vocational School, ";
    if (edu_lisans) res += "Bachelor, ";
    if (edu_ylisans) res += "Master, ";
    if (edu_doktora) res += "Doctorate, ";
    if (edu_others) res += "Other, ";
    setcanada_edus(res);
  }, [
    edu_none,
    edu_canada,
    edu_lise,
    edu_yuksekokul,
    edu_lisans,
    edu_ylisans,
    edu_doktora,
    edu_others,
  ]);

  useEffect(() => {
    let res = "";
    if (work_full) res += "None , ";
    if (work_part) res += "Entirety of my education was in Canada, ";
    if (work_self) res += "High School, ";
    if (work_student) res += "Vocational School, ";
    if (work_unemployed) res += "Bachelor, ";
    if (work_retired) res += "Master, ";
    if (work_others) res += "- " + work_others;
    setwork(res);
  }, [
    work_full,
    work_part,
    work_self,
    work_student,
    work_unemployed,
    work_retired,
    work_others,
  ]);

  const [volunteer_details, setvolunteer_details] = useState(false);
  const [volunteer, setvolunteer] = useState(false);
  const [sponsor, setsponsor] = useState(false);

  const [organizing, setorganizing] = useState(false);
  const [mentorship, setmentorship] = useState(false);
  const [lang_support, setlang_support] = useState(false);
  const [delivery, setdelivery] = useState(false);
  const [comm_support, setcomm_support] = useState(false);
  const [assist_children, setassist_children] = useState(false);
  const [tech_support, settech_support] = useState(false);
  const [val_others, setval_others] = useState(false);

  useEffect(() => {
    let res = "";
	if (organizing) res += "Organizing or running an event, ";
	if (mentorship) res += "Academic or professional mentorship, ";
	if (lang_support) res += "Providing translation or language support, ";
	if (delivery) res += "Transportation or delivery support, ";
	if (comm_support) res += "Administrative or communication support, ";
	if (assist_children)
	  res += "Helping in activities for children, ";
	if (tech_support)
	  res += "Technical support - device setup, technology assistance, etc., ";
	if (val_others) res += "Other ";
	setvolunteer_details(res);
  }, [
    organizing,
    mentorship,
    lang_support,
    delivery,
    comm_support,
    assist_children,
    tech_support,
    val_others,
  ]);

  const stepBack = () => {
    if (step === 1) return;
    setStep(step - 1);
  };

  const stepForward = () => {
    if (step === 2) {
      if (email === "") {
        alert("Please enter your e-mail address.");
        return;
      }
      if (statu === "") {
        alert("Please select your status in Canada.");
        return;
      }
      if (duration === "") {
        alert("Please select the duration of your time in Canada.");
        return;
      }
    }

    if (step === 3) {
      if (age === "") {
        alert("Please select your age group.");
        return;
      }
      if (languages === "" && !other_languages) {
        alert("Please select the languages you speak.");
        return;
      }
      if (edu === "") {
        alert("Please select your education level.");
        return;
      }
      if (work === "") {
        alert("Please select your work status.");
        return;
      }
    }

    if (step === 4) {
      if (occupation === "") {
        alert("Please select your occupation.");
        return;
      }
      if (city === "") {
        alert("Please pick your city.");
        return;
      }

      if (volunteer) {
        if (
          organizing === false &&
          mentorship === false &&
          lang_support === false &&
          delivery === false &&
          comm_support === false &&
          assist_children === false &&
          tech_support === false &&
          val_others === false
        ) {
          alert("Please select the activities you would like to volunteer for.");
          return;
        }
      }
    }

    if (step === 5) {
      if (get_email === "") {
        alert("Please select the email communication permission.");
        return;
      }
    }

    if (step === 5) {
      save();
    } else {
      setStep(step + 1);
    }
  };

  const save = () => {
    console.log("save");
    fetch("/form_save.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        statu,
        duration,
        age,
        gender,
        gender_extra,
        languages,
        edu,
        edu_extra,
        canada_edus,
        work,
        occupation,
        occupation_others,
        city,
        city_extra,
        marital,
        marital_extra,
        child,
        organization,
        volunteer,
        sponsor,
        volunteer_details,
        expectation,
        comment,
        get_email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setfinished(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="bg-white border rounded-3 p-4">
      <div className="text-center mb-3">
        <a href="index.html">
          <img src="images/logo.png" width="150" alt="" />
        </a>
      </div>

      {finished ? (
        <div className="text-center h3 py-5">
          <strong>Thank you, your registration has been successfully completed.</strong>
        </div>
      ) : (
        <>
          <MyStepper step={step} />

          {step === 1 && (
            <>
              <div className="text-center h3">
                <strong>Welcome</strong>
              </div>
              <div className="text-center">
                Please answer the following questions as accurately as you can. Your participation is entirely voluntary.
              </div>

              <div className="bg-body-secondary p-4 mt-4 rounded-3">
                <div>
                  Welcome to the Speak Up Canada registration form! Thank you very much for taking the time to participate in this survey. Our goal is to explore how we can build a stronger, more connected community together.
                </div>
                <div className="mt-3">
                 By participating in this survey, you agree that the information you provide will be used solely for the purpose of understanding and supporting Ses Ver Canada. Your data will be kept confidential and will not be shared beyond the stated purposes.
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="text-center h3">
                <strong>Personal Information</strong>
              </div>
              <div className="text-center">Basic Information</div>

              <div className="mt-4 mb-1">
                <strong>Your email address *</strong>
              </div>
              <input
                type="text"
                value={email}
                className="form-control h-auto py-2 px-3 mb-2"
                placeholder="your-email@example.com"
                onChange={(e) => setemail(e.target.value)}
              />

              <div className="mt-3 mb-1">
                <strong>Your status in Canada *</strong>
              </div>

              <select
                className="form-select h-auto py-2 px-3 mb-2"
                value={statu}
                onChange={(e) => setstatu(e.target.value)}
              >
                {status.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              <div className="mt-3 mb-1">
                <strong>How long have you been in Canada? *</strong>
              </div>

              <select
                className="form-select h-auto py-2 px-3 mb-2"
                value={duration}
                onChange={(e) => setduration(e.target.value)}
              >
                {durations.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </>
          )}

          {step === 3 && (
            <>
              <div className="text-center h3">
                <strong>History</strong>
              </div>
              <div className="text-center">Education and work</div>

              <div className="d-flex ">
                <div className="flex-fill me-2">
                  <div className="mt-4 mb-1">
                    <strong>Age *</strong>
                  </div>
                  <select
                    className="form-select h-auto py-2 px-3 mb-2"
                    value={age}
                    onChange={(e) => setage(e.target.value)}
                  >
                    {ages.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-fill ms-2">
                  <div className="mt-4 mb-1">
                    <strong>Gender (Optional)</strong>
                  </div>
                  <select
                    className="form-select h-auto py-2 px-3 mb-2"
                    value={gender}
                    onChange={(e) => setgender(e.target.value)}
                  >
                    {genders.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>

                  {gender === "Other" && (
                    <input
                      type="text"
                      className="form-control h-auto py-2 px-3 mb-2"
                      placeholder="Please specify: "
                      value={gender_extra}
                      onChange={(e) => setgender_extra(e.target.value)}
                    />
                  )}
                </div>
              </div>

              <div className="mt-4 mb-1">
                <strong>Languages you speak *</strong>
              </div>

              <div className="d-flex">
                <div className="flex-fill me-2">
                  <div onClick={() => setturkish(!turkish)}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={turkish}
                    />{" "}
                    Turkish
                  </div>
                  <div className="mt-1" onClick={() => setfrench(!french)}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={french}
                    />{" "}
                    French
                  </div>
                  <div className="mt-1" onClick={() => setgerman(!german)}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={german}
                    />{" "}
                    German
                  </div>
                  <div className="mt-1" onClick={() => setrussian(!russian)}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={russian}
                    />{" "}
                    Russian
                  </div>
                </div>
                <div className="flex-fill ms-2 ">
                  <div onClick={() => setenglish(!english)}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={english}
                    />{" "}
                    English
                  </div>
                  <div className="mt-1" onClick={() => setspanish(!spanish)}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={spanish}
                    />{" "}
                    Spanish
                  </div>
                  <div className="mt-1" onClick={() => setarabic(!arabic)}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={arabic}
                    />{" "}
                    Arabic
                  </div>
                  <div className="mt-1" onClick={() => setchinese(!chinese)}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={chinese}
                    />{" "}
                    Chinese
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  value={other_languages}
                  className="form-control h-auto py-2 px-3 mb-2"
                  placeholder="Other languages"
                  onChange={(e) => setother_languages(e.target.value)}
                />
              </div>

              <div className="mt-4 mb-1">
                <strong>Education level *</strong>
              </div>

              <select
                className="form-select h-auto py-2 px-3 mb-2"
                value={edu}
                onChange={(e) => setedu(e.target.value)}
              >
                {edus.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              {edu === "Other" && (
                <input
                  type="text"
                  className="form-control h-auto py-2 px-3 mb-2"
                  placeholder="Please specify: "
                  value={edu_extra}
                  onChange={(e) => setedu_extra(e.target.value)}
                />
              )}

              <div className="mt-4 mb-1">
                <strong>Training/Education in Canada (Optional)</strong>
              </div>

              <div className="d-flex">
                <div className="flex-fill me-2">
                  <div className="mt-1" onClick={() => setedu_none(!edu_none)}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={edu_none}
                    />{" "}
                    None
                  </div>

                  <div
                    className="mt-1"
                    onClick={() => setedu_canada(!edu_canada)}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={edu_canada}
                    />{" "}
                    Entirety of my education was in Canada
                  </div>

                  <div className="mt-1" onClick={() => setedu_lise(!edu_lise)}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={edu_lise}
                    />{" "}
                    High School
                  </div>

                  <div
                    className="mt-1"
                    onClick={() => setedu_yuksekokul(!edu_yuksekokul)}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={edu_yuksekokul}
                    />{" "}
                    Vocational School
                  </div>
                </div>
                <div className="flex-fill ms-2">
                  <div
                    className="mt-1"
                    onClick={() => setedu_lisans(!edu_lisans)}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={edu_lisans}
                    />{" "}
                    Bachelor
                  </div>

                  <div
                    className="mt-1"
                    onClick={() => setedu_ylisans(!edu_ylisans)}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={edu_ylisans}
                    />{" "}
                    Master
                  </div>

                  <div
                    className="mt-1"
                    onClick={() => setedu_doktora(!edu_doktora)}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={edu_doktora}
                    />{" "}
                    Doctorate
                  </div>

                  <div
                    className="mt-1"
                    onClick={() => setedu_others(!edu_others)}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={edu_others}
                    />{" "}
                    Other
                  </div>
                </div>
              </div>

              <div className="mt-4 mb-1">
                <strong>Work status *</strong>
              </div>

              <div className="d-flex">
                <div className="flex-fill me-2">
                  <div
                    className="mt-1"
                    onClick={() => setwork_full(!work_full)}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={work_full}
                    />{" "}
                    Full-time
                  </div>

                  <div
                    className="mt-1"
                    onClick={() => setwork_part(!work_part)}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={work_part}
                    />{" "}
                    Part-time
                  </div>

                  <div
                    className="mt-1"
                    onClick={() => setwork_self(!work_self)}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={work_self}
                    />{" "}
                    Self-employed
                  </div>
                </div>
                <div className="flex-fill ms-2">
                  <div
                    className="mt-1"
                    onClick={() => setwork_student(!work_student)}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={work_student}
                    />{" "}
                   Student
                  </div>

                  <div
                    className="mt-1"
                    onClick={() => setwork_unemployed(!work_unemployed)}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={work_unemployed}
                    />{" "}
                    Unemployed
                  </div>

                  <div
                    className="mt-1"
                    onClick={() => setwork_retired(!work_retired)}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={work_retired}
                    />{" "}
                    Retired
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  value={work_others}
                  className="form-control h-auto py-2 px-3 mb-2"
                  placeholder="Other"
                  onChange={(e) => setwork_others(e.target.value)}
                />
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <div className="text-center h3">
                <strong>Community</strong>
              </div>
              <div className="text-center">Participation and Support</div>

              <div className="mt-4 mb-1">
                <strong>Your occupation *</strong>
              </div>
              <select
                className="form-select h-auto py-2 px-3 mb-2"
                value={occupation}
                onChange={(e) => setoccupation(e.target.value)}
              >
                {occupations.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              {occupation === "Other" && (
                <div className="mt-2">
                  <input
                    type="text"
                    value={occupation_others}
                    className="form-control h-auto py-2 px-3 mb-2"
                    placeholder="Please specify: "
                    onChange={(e) => setoccupation_others(e.target.value)}
                  />
                </div>
              )}

              <div className="mt-4 mb-1">
                <strong>City *</strong>
              </div>
              <select
                className="form-select h-auto py-2 px-3 mb-2"
                value={city}
                onChange={(e) => setcity(e.target.value)}
              >
                {cities.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              {city === "Other" && (
                <div className="mt-2">
                  <input
                    type="text"
                    value={city_extra}
                    className="form-control h-auto py-2 px-3 mb-2"
                    placeholder="Please specify: "
                    onChange={(e) => setcity_extra(e.target.value)}
                  />
                </div>
              )}

              <div className="mt-4 mb-1">
                <strong>Marital Status (Optional)</strong>
              </div>
              <select
                className="form-select h-auto py-2 px-3 mb-2"
                value={marital}
                onChange={(e) => setmarital(e.target.value)}
              >
                {maritals.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              {marital === "Other" && (
                <div className="mt-2">
                  <input
                    type="text"
                    value={marital_extra}
                    className="form-control h-auto py-2 px-3 mb-2"
                    placeholder="Please specify: "
                    onChange={(e) => setmarital_extra(e.target.value)}
                  />
                </div>
              )}

              <div className="mt-4 mb-1">
                <strong>Do you have kids? (Optional)</strong>
              </div>
              <select
                className="form-select h-auto py-2 px-3 mb-2"
                value={child}
                onChange={(e) => setchild(e.target.value)}
              >
                {childs.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              <div className="mt-4 mb-1">
                <strong>
					Are you actively involved in any community organization or social group? (Optional)
                </strong>
              </div>

              <textarea
                className="form-control h-auto py-2 px-3 mb-2"
                value={organization}
                onChange={(e) => setorganization(e.target.value)}
                placeholder="Please explain: "
              ></textarea>

              <div className="mt-4 mb-1">
                <strong>Your preference for volunteering or sponsoring *</strong>
              </div>

              <div className="mt-1" onClick={() => setvolunteer(!volunteer)}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={volunteer}
                />{" "}
                I want to volunteer
              </div>
              <div className="mt-1" onClick={() => setsponsor(!sponsor)}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={sponsor}
                />{" "}
                I want to be a sponsor
              </div>

              {volunteer && (
                <>
                  <div className="mt-4 mb-1">
                    <strong>
                      Which types of support can you provide as a volunteer? *
                    </strong>
                  </div>

                  <div
                    className="mt-1"
                    onClick={() => setorganizing(!organizing)}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={organizing}
                    />{" "}
                    Organizing and running activities
                  </div>
                  <div
                    className="mt-1"
                    onClick={() => setmentorship(!mentorship)}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={mentorship}
                    />{" "}
                    Academic or professional mentorship
                  </div>
                  <div
                    className="mt-1"
                    onClick={() => setlang_support(!lang_support)}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={lang_support}
                    />{" "}
                    Translation and language related support
                  </div>
                  <div className="mt-1" onClick={() => setdelivery(!delivery)}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={delivery}
                    />{" "}
                    Transportation or delivery support
                  </div>
                  <div
                    className="mt-1"
                    onClick={() => setcomm_support(!comm_support)}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={comm_support}
                    />{" "}
                    Administrative or communicative support
                  </div>
                  <div
                    className="mt-1"
                    onClick={() => setassist_children(!assist_children)}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={assist_children}
                    />{" "}
                    Assisting with activities for children
                  </div>
                  <div
                    className="mt-1"
                    onClick={() => settech_support(!tech_support)}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={tech_support}
                    />{" "}
                    Technical support – device setup, technology assistance, etc.
                  </div>
                  <div
                    className="mt-1"
                    onClick={() => setval_others(!val_others)}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={val_others}
                    />{" "}
                    Other
                  </div>
                </>
              )}
            </>
          )}

          {step === 5 && (
            <>
              <div className="text-center h3">
                <strong>Complete</strong>
              </div>
              <div className="text-center">Final details</div>

              <div className="mt-4 mb-1">
                <strong>
					What are your expectations from a Turkish community established by volunteers? (Optional)
                </strong>
              </div>

              <textarea
                className="form-control h-auto py-2 px-3 mb-2"
                value={expectation}
                onChange={(e) => setexpectation(e.target.value)}
                placeholder="Share your thoughts"
              ></textarea>

              <div className="mt-4 mb-1">
                <strong>
					Do you have any other comments or suggestions to help strengthen the community? (Optional)
                </strong>
              </div>

              <textarea
                className="form-control h-auto py-2 px-3 mb-2"
                value={comment}
                onChange={(e) => setcomment(e.target.value)}
                placeholder="Share your thoughts"
              ></textarea>

              <div className="mt-4 mb-1">
                <strong>
					Do you allow us to contact you via email? *
                </strong>
              </div>

              <select
                className="form-select h-auto py-2 px-3 mb-2"
                value={get_email}
                onChange={(e) => setget_email(e.target.value)}
              >
                {get_emails.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </>
          )}

          <div className="d-flex justify-content-between mt-5 ">
            <button
              type="button"
              className={
                step === 1 ? "btn btn-light btn-lg" : "btn btn-primary btn-lg"
              }
              onClick={stepBack}
            >
              <i className="bi bi-arrow-left me-1"></i>
              Previous
            </button>
            <button
              type="button"
              className={"btn btn-primary btn-lg"}
              onClick={stepForward}
            >
              {step === 5 ? "Complete and Save" : "Forward"}
              {step !== 5 && <i className="bi bi-arrow-right ms-1"></i>}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
