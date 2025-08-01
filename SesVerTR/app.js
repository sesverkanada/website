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
    "Statü seçiniz",
    "Turist",
    "Öğrenci",
    "Çalışan",
    "Daimi Oturum",
    "Kanada Vatandaşı",
    "Diğer",
  ]);
  const [durations, setdurations] = useState([
    "Süre seçiniz",
    "1-3 yıl",
    "3-5 yıl",
    "5-10 yıl",
    "10 yıldan fazla",
    "Burada doğdum",
  ]);
  const [ages, setages] = useState([
    "Yaş seçiniz",
    "18-28",
    "25-34",
    "35-44",
    "45-54",
    "55-64",
    "65 veya üstü",
  ]);
  const [genders, setgenders] = useState([
    "Cinsiyet seçiniz",
    "Erkek",
    "Kadın",
    "İkili cinsiyet dışı",
    "Trans birey",
    "Yanıt vermek istemiyorum",
    "Diğer",
  ]);
  const [edus, setedus] = useState([
    "Eğitim durumu seçiniz",
    "Lise",
    "Meslek Yüksekokulu",
    "Lisans",
    "Yüksek Lisans",
    "Doktora",
    "Resmi bir eğitimim yok",
    "Diğer",
  ]);

  const [occupations, setoccupations] = useState([
    "Meslek seçiniz",
    "İnşaat",
    "Eğitim",
    "Finans",
    "Sağlık",
    "Konaklama ve Turizm",
    "Bilişim Teknolojileri",
    "Hukuk Hizmetleri",
    "İmalat",
    "Pazarlama ve Reklamcılık",
    "Kamu Hizmetleri",
    "Perakende",
    "Ulaşım Lojistik",
    "Diğer",
  ]);

  const [cities, setcities] = useState([
    "Şehir seçiniz",
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
    "Diğer",
  ]);

  const [marital, setmarital] = useState("");
  const [marital_extra, setmarital_extra] = useState("");
  const [maritals, setmaritals] = useState([
    "Durum seçiniz",
    "Bekar",
    "Evli",
    "Boşanmış",
    "Nişanlı",
    "Birlikte yaşayan",
    "Yanıtlamak istemiyorum",
    "Diğer",
  ]);

  const [child, setchild] = useState("");

  const [childs, setchilds] = useState([
    "Seçiniz",
    "18yaş altı çocuğum var",
    "Yetişkin çocuğum var",
    "Çocuğum yok",
  ]);

  const [get_email, setget_email] = useState("");
  const [get_emails, setget_emails] = useState(["Seçiniz", "Evet", "Hayır"]);

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
    if (edu_none) res += "Almadım, ";
    if (edu_canada) res += "Eğitimimin tamamı Kanada'da geçti, ";
    if (edu_lise) res += "Lise, ";
    if (edu_yuksekokul) res += "Meslek Yüksekokulu, ";
    if (edu_lisans) res += "Lisans, ";
    if (edu_ylisans) res += "Yüksek lisans, ";
    if (edu_doktora) res += "Doktora, ";
    if (edu_others) res += "Diğer, ";
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
    if (work_full) res += "Almadım, ";
    if (work_part) res += "Eğitimimin tamamı Kanada'da geçti, ";
    if (work_self) res += "Lise, ";
    if (work_student) res += "Meslek Yüksekokulu, ";
    if (work_unemployed) res += "Lisans, ";
    if (work_retired) res += "Yüksek lisans, ";
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

  const stepBack = () => {
    if (step === 1) return;
    setStep(step - 1);
  };

  const stepForward = () => {
    if (step === 2) {
      if (email === "") {
        alert("Lütfen e-posta adresinizi giriniz.");
        return;
      }
      if (statu === "") {
        alert("Lütfen Kanada statünüzü seçiniz.");
        return;
      }
      if (duration === "") {
        alert("Lütfen Kanada'da bulunma sürenizi seçiniz.");
        return;
      }
    }

    if (step === 3) {
      if (age === "") {
        alert("Lütfen yaşınızı seçiniz.");
        return;
      }
      if (languages === "" && !other_languages) {
        alert("Lütfen konuştuğunuz dilleri seçiniz.");
        return;
      }
      if (edu === "") {
        alert("Lütfen eğitim durumunuzu seçiniz.");
        return;
      }
      if (work === "") {
        alert("Lütfen çalışma durumunuzu seçiniz.");
        return;
      }
    }

    if (step === 4) {
      if (occupation === "") {
        alert("Lütfen mesleğinizi seçiniz.");
        return;
      }
      if (city === "") {
        alert("Lütfen şehir seçiniz.");
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
          alert("Lütfen gönüllü olmak istediğiniz aktiviteleri seçiniz.");
          return;
        }
      }
    }

    if (step === 5) {
      if (get_email === "") {
        alert("Lütfen e-posta ile iletişim iznini seçiniz.");
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
    console.log("kaydet");
    fetch("/test2/form_save.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        statu,
        duration,
        age,
        languages,
        other_languages,
        edu,
        work,
        occupation,
        city,
        volunteer,
        sponsor,
        organizing,
        mentorship,
        lang_support,
        delivery,
        comm_support,
        assist_children,
        tech_support,
        val_others,
        get_email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="bg-white border rounded-3 p-4">
      <MyStepper step={step} />

      {step === 1 && (
        <>
          <div className="text-center h3">
            <strong>Hoşgeldiniz</strong>
          </div>
          <div className="text-center">
            Lütfen aşağıdaki soruları elinizden geldiğince doğru bir şekilde
            yanıtlayınız. Katılımınız tamamen gönüllülük esaslıdır.
          </div>

          <div className="bg-body-secondary p-4 mt-4 rounded-3">
            <div>
              Ses Ver Kanada kayıt formuna hoşgeldiniz! Bu ankete zaman ayırıp
              katıldığınız için çok teşekkür ederiz. Amacımız hep birlikte daha
              güçlü, daha bağlı bir topluluk nasıl kurabiliriz, bunu keşfetmek.
            </div>
            <div className="mt-3">
              Bu ankete katılarak, verdiğiniz bilgilerin yalnızca Ses Ver
              Kanada'yı anlamak ve desteklemek amacıyla kullanılacağını kabul
              etmiş olursunuz. Verileriniz gizli tutulacak ve belirtilen amaçlar
              dışında paylaşılmayacaktır.
            </div>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <div className="text-center h3">
            <strong>Kişisel Bilgiler</strong>
          </div>
          <div className="text-center">Temel bilgiler</div>

          <div className="mt-4 mb-1">
            <strong>E-posta adresiniz *</strong>
          </div>
          <input
            type="text"
            value={email}
            className="form-control h-auto py-2 px-3 mb-2"
            placeholder="your-email@example.com"
            onChange={(e) => setemail(e.target.value)}
          />

          <div className="mt-3 mb-1">
            <strong>Kanada'daki statünüz nedir? *</strong>
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
            <strong>Kanada'da ne kadar süredir bulunuyorsunuz? *</strong>
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
            <strong>Geçmiş</strong>
          </div>
          <div className="text-center">Eğitim ve iş</div>

          <div className="d-flex ">
            <div className="flex-fill me-2">
              <div className="mt-4 mb-1">
                <strong>Yaş *</strong>
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
                <strong>Cinsiyet (isteğe bağlı)</strong>
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

              {gender === "Diğer" && (
                <input
                  type="text"
                  className="form-control h-auto py-2 px-3 mb-2"
                  placeholder="Lütfen belirtiniz"
                  value={gender_extra}
                  onChange={(e) => setgender_extra(e.target.value)}
                />
              )}
            </div>
          </div>

          <div className="mt-4 mb-1">
            <strong>Konuştuğunuz diller *</strong>
          </div>

          <div className="d-flex">
            <div className="flex-fill me-2">
              <div onClick={() => setturkish(!turkish)}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={turkish}
                />{" "}
                Türkçe
              </div>
              <div className="mt-1" onClick={() => setfrench(!french)}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={french}
                />{" "}
                Fransızca
              </div>
              <div className="mt-1" onClick={() => setgerman(!german)}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={german}
                />{" "}
                Almanca
              </div>
              <div className="mt-1" onClick={() => setrussian(!russian)}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={russian}
                />{" "}
                Rusça
              </div>
            </div>
            <div className="flex-fill ms-2 ">
              <div onClick={() => setenglish(!english)}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={english}
                />{" "}
                İngilizce
              </div>
              <div className="mt-1" onClick={() => setspanish(!spanish)}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={spanish}
                />{" "}
                İspanyolca
              </div>
              <div className="mt-1" onClick={() => setarabic(!arabic)}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={arabic}
                />{" "}
                Arapça
              </div>
              <div className="mt-1" onClick={() => setchinese(!chinese)}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={chinese}
                />{" "}
                Çince
              </div>
            </div>
          </div>
          <div className="mt-2">
            <input
              type="text"
              value={other_languages}
              className="form-control h-auto py-2 px-3 mb-2"
              placeholder="Diğer diller"
              onChange={(e) => setother_languages(e.target.value)}
            />
          </div>

          <div className="mt-4 mb-1">
            <strong>Eğitim durumunuz *</strong>
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

          {edu === "Diğer" && (
            <input
              type="text"
              className="form-control h-auto py-2 px-3 mb-2"
              placeholder="Lütfen belirtiniz"
              value={edu_extra}
              onChange={(e) => setedu_extra(e.target.value)}
            />
          )}

          <div className="mt-4 mb-1">
            <strong>Kanada'da aldığınız eğitimler (isteğe bağlı)</strong>
          </div>

          <div className="d-flex">
            <div className="flex-fill me-2">
              <div className="mt-1" onClick={() => setedu_none(!edu_none)}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={edu_none}
                />{" "}
                Almadım
              </div>

              <div className="mt-1" onClick={() => setedu_canada(!edu_canada)}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={edu_canada}
                />{" "}
                Eğitimimin tamamı Kanada'da geçti
              </div>

              <div className="mt-1" onClick={() => setedu_lise(!edu_lise)}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={edu_lise}
                />{" "}
                Lise
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
                Meslek Yüksekokulu
              </div>
            </div>
            <div className="flex-fill ms-2">
              <div className="mt-1" onClick={() => setedu_lisans(!edu_lisans)}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={edu_lisans}
                />{" "}
                Lisans
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
                Yüksek lisans
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
                Doktora
              </div>

              <div className="mt-1" onClick={() => setedu_others(!edu_others)}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={edu_others}
                />{" "}
                Diğer
              </div>
            </div>
          </div>

          <div className="mt-4 mb-1">
            <strong>Çalışma durumunuz *</strong>
          </div>

          <div className="d-flex">
            <div className="flex-fill me-2">
              <div className="mt-1" onClick={() => setwork_full(!work_full)}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={work_full}
                />{" "}
                Tam zamanlı
              </div>

              <div className="mt-1" onClick={() => setwork_part(!work_part)}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={work_part}
                />{" "}
                Yarı zamanlı
              </div>

              <div className="mt-1" onClick={() => setwork_self(!work_self)}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={work_self}
                />{" "}
                Kendi işimde çalışıyorum
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
                Öğrenciyim
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
                İşsizim
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
                Emekliyim
              </div>
            </div>
          </div>
          <div className="mt-2">
            <input
              type="text"
              value={work_others}
              className="form-control h-auto py-2 px-3 mb-2"
              placeholder="Diğer"
              onChange={(e) => setwork_others(e.target.value)}
            />
          </div>
        </>
      )}

      {step === 4 && (
        <>
          <div className="text-center h3">
            <strong>Topluluk</strong>
          </div>
          <div className="text-center">Katılım ve destek</div>

          <div className="mt-4 mb-1">
            <strong>Mesleğiniz *</strong>
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

          {occupation === "Diğer" && (
            <div className="mt-2">
              <input
                type="text"
                value={occupation_others}
                className="form-control h-auto py-2 px-3 mb-2"
                placeholder="Lütfen belirtiniz"
                onChange={(e) => setoccupation_others(e.target.value)}
              />
            </div>
          )}

          <div className="mt-4 mb-1">
            <strong>Şehir *</strong>
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

          {city === "Diğer" && (
            <div className="mt-2">
              <input
                type="text"
                value={city_extra}
                className="form-control h-auto py-2 px-3 mb-2"
                placeholder="Lütfen belirtiniz"
                onChange={(e) => setcity_extra(e.target.value)}
              />
            </div>
          )}

          <div className="mt-4 mb-1">
            <strong>Medeni durumunuz (isteğe bağlı)</strong>
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

          {marital === "Diğer" && (
            <div className="mt-2">
              <input
                type="text"
                value={marital_extra}
                className="form-control h-auto py-2 px-3 mb-2"
                placeholder="Lütfen belirtiniz"
                onChange={(e) => setmarital_extra(e.target.value)}
              />
            </div>
          )}

          <div className="mt-4 mb-1">
            <strong>Çocuğunuz var mı? (isteğe bağlı)</strong>
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
              Herhangi bir topluluk organizasyonunda ya da sosyal grupta aktif
              olarak yer alıyor musunuz? (isteğe bağlı)
            </strong>
          </div>

          <textarea
            className="form-control h-auto py-2 px-3 mb-2"
            value={organization}
            onChange={(e) => setorganization(e.target.value)}
            placeholder="Lütfen açıklayınız"
          ></textarea>

          <div className="mt-4 mb-1">
            <strong>Gönüllü olma veya sponsor olma tercihiniz *</strong>
          </div>

          <div className="mt-1" onClick={() => setvolunteer(!volunteer)}>
            <input
              className="form-check-input"
              type="checkbox"
              checked={volunteer}
            />{" "}
            Gönüllü olmak isterim
          </div>
          <div className="mt-1" onClick={() => setsponsor(!sponsor)}>
            <input
              className="form-check-input"
              type="checkbox"
              checked={sponsor}
            />{" "}
            Sponsor olmak isterim
          </div>

          {volunteer && (
            <>
              <div className="mt-4 mb-1">
                <strong>
                  Gönüllü olarak hangi destekleri sağlayabilirsiniz? *
                </strong>
              </div>

              <div className="mt-1" onClick={() => setorganizing(!organizing)}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={organizing}
                />{" "}
                Etkinlik düzenlemek veya yürütmek
              </div>
              <div className="mt-1" onClick={() => setmentorship(!mentorship)}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={mentorship}
                />{" "}
                Akademik veya mesleki mentorluk
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
                Çeviri veya dil desteği sağlamak
              </div>
              <div className="mt-1" onClick={() => setdelivery(!delivery)}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={delivery}
                />{" "}
                Ulaşım veya teslimat desteği
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
                İdari veya iletişim desteği
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
                Çocuklar için yapılan etkinliklerde yardımcı olmak
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
                Teknik destek - cihaz kurulumu, teknoloji yardımı vb.
              </div>
              <div className="mt-1" onClick={() => setval_others(!val_others)}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={val_others}
                />{" "}
                Diğer
              </div>
            </>
          )}
        </>
      )}

      {step === 5 && (
        <>
          <div className="text-center h3">
            <strong>Tamamla</strong>
          </div>
          <div className="text-center">Son detaylar</div>

          <div className="mt-4 mb-1">
            <strong>
              Gönüllüler tarafından kurulan bir Türk topluluğundan
              beklentileriniz nelerdir? (isteğe bağlı)
            </strong>
          </div>

          <textarea
            className="form-control h-auto py-2 px-3 mb-2"
            value={expectation}
            onChange={(e) => setexpectation(e.target.value)}
            placeholder="Düşüncelerinizi paylaşın"
          ></textarea>

          <div className="mt-4 mb-1">
            <strong>
              Topluluğu güçlendirmek için başka yorumlarınız veya önerileriniz
              var mı? (isteğe bağlı)
            </strong>
          </div>

          <textarea
            className="form-control h-auto py-2 px-3 mb-2"
            value={comment}
            onChange={(e) => setcomment(e.target.value)}
            placeholder="Düşüncelerinizi paylaşın"
          ></textarea>

          <div className="mt-4 mb-1">
            <strong>
              E-posta yoluyla sizinle iletişime geçmemize izin veriyor musunuz?
              *
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
          Önceki
        </button>
        <button
          type="button"
          className={"btn btn-primary btn-lg"}
          onClick={stepForward}
        >
          {step === 5 ? "Kaydı Tamamla ve Kaydet" : "İleri"}
          {step !== 5 && <i className="bi bi-arrow-right ms-1"></i>}
        </button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
