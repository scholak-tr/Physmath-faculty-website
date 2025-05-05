import React, {useState} from "react";
import "./../css/main.css";

const Shedule2arr = {
    fullTime: {
        title:"Очная форма обучения",
        steps:[
            {
                stepTitle:"Бакалавриат",
                courses: [
                    {
                        courseTitle: "1 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "2 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "3 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "4 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: "https://drive.google.com/file/d/13BwZm6ZV1oRGdw2JrzGlwmTc9yWlF5cV/view?usp=sharing"
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: "https://drive.google.com/file/d/13kVR1fhRkAgoTF9RHMb2VtkV1N0hLJuI/view?usp=sharing"
                            },
                            {
                                halfYearTitle: "408 группа зачеты",
                                link: "https://drive.google.com/file/d/1NL9Q65Mh75uy0hx_2PAlMDIfh_HUR1CR/view?usp=sharing"
                            },
                            {
                                halfYearTitle: "408 группа экзамены",
                                link: "https://drive.google.com/file/d/17Ht0wR2j5G0AYOE36k9YwOX2E2EO3_Z1/view?usp=sharing"
                            }
                        ] 
                    },
                    {
                        courseTitle: "5 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    }
                ]
            },
            {
                stepTitle:"Специалитет",
                courses: [
                    {
                        courseTitle: "1 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "2 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "3 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "4 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: "https://drive.google.com/file/d/1i7d9HKRx4nUwHUsQAzEybcTx0xagBSCH/view?usp=sharing"
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: "https://drive.google.com/file/d/1PyWL9nznIAtqPRt6MLZkmW3r3HxDHdox/view?usp=sharing"
                            }
                        ]
                    },
                    {
                        courseTitle: "5 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: "https://drive.google.com/file/d/1yqyAkjrjfqzpHfGlNWjueuR746SXqT-X/view?usp=sharing"
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: "https://drive.google.com/file/d/1qOKG8sGxVYhJgf-xon8OBKTCyBXlw07_/view?usp=sharing"
                            }
                        ]
                    },
                    {
                        courseTitle: "6 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    }
                ]
            },
            {
                stepTitle:"Магистратура",
                courses: [
                    {
                        courseTitle: "1 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "2 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    }
                ]
            }
        ]
    },
    fullTimeCor: {
        title:"Очно-заочная форма обучения",
        steps:[
            {
                stepTitle:"Бакалавриат",
                courses: [
                    {
                        courseTitle: "1 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "2 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "3 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "4 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "5 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    }
                ]
            },
            {
                stepTitle:"Специалитет",
                courses: [
                    {
                        courseTitle: "1 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "2 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "3 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "4 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "5 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "6 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    }
                ]
            },
            {
                stepTitle:"Магистратура",
                courses: [
                    {
                        courseTitle: "1 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "2 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    }
                ]
            }
        ]
    },
    correspondes: {
        title:"Заочная форма обучения",
        steps:[
            {
                stepTitle:"Бакалавриат",
                courses: [
                    {
                        courseTitle: "1 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "2 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "3 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "4 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "5 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Учебно-экзаменационная сессия",
                                link: "https://drive.google.com/file/d/1BaN1hTaAnIsmbIbquMrZMkkpZ5e5tLG4/view?usp=sharing"
                            }
                        ]
                    }
                ]
            },
            {
                stepTitle:"Специалитет",
                courses: [
                    {
                        courseTitle: "1 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "2 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "3 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "4 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "5 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Учебно-экзаменационная сессия",
                                link: "https://drive.google.com/file/d/1WDJFmjtD__Rj79Nw5I9GPAzdL4aurLxn/view?usp=sharing"
                            }
                        ]
                    },
                    {
                        courseTitle: "6 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    }
                ]
            },
            {
                stepTitle:"Магистратура",
                courses: [
                    {
                        courseTitle: "1 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Экзамены",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "2 курс",
                        halfYears: [
                            {
                                halfYearTitle: "Зачеты",
                                link: ""
                            },
                            {
                                halfYearTitle: "Учебно-экзаменационная сессия",
                                link: "https://drive.google.com/file/d/1fsE1A5p6dzYTj-HUZol357gypESmsV7s/view?usp=sharing"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    /** 
    grafic: {
        title:"Графики погашения задолженностей",
        steps:[
            {
                stepTitle:"с 03 сентября 2024 г. по 22 сентября 2024 г.",
                links: [
                    "https://drive.google.com/file/d/1SGssXlp-Hv7-UiuAfiqxjdahwuuqOVS2/view?usp=sharing",
                ],
            },
            {
                stepTitle:"с 03 февраля 2025 г. по 15 марта 2025 г.",
                links: [
                    "https://drive.google.com/file/d/12vjw5OyJ2PI3bvsEBeQAVKu8cT7yd0Wk/view?usp=drive_link",
                ],
            },
            {
                stepTitle:"с 19 марта 2025 г. по 31 марта 2025 г.",
                links: [
                    "https://drive.google.com/file/d/1VADaMmYwox3ZVK2Lxii4e6DUyf08EFkL/view?usp=sharing",
                ],
            },
        ]
    }
        */
}

{/* 
const StepMenu = ({ steps }) => {
    const [openStepIndex, setOpenStepIndex] = useState(null);

    return (
        <ul className="step-menu" style={{ textAlign: "center", listStyleType: "none" }}>
            {steps && steps.map((step, index) => (
                <li key={index}>
                    <span
                        onClick={() =>
                            setOpenStepIndex(openStepIndex === index ? null : index)
                        }
                        className="menu-button"
                        style={{ backgroundColor: "white", border: "solid 1px #43a5ee", color: "#43a5ee" }}
                    >
                        {step.stepTitle}
                    </span>
                    {openStepIndex === index && (
                        <ul className="submenu">
                            {step.links.map((link, idx) => (
                                <li key={idx} style={{ textAlign: "center", listStyleType: "none" }}>
                                    <a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link-button"
                                    >
                                        {`Ссылка на график ${idx + 1}`}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};


const ScheduleComponent = () => {
    const [openFormIndex, setOpenFormIndex] = useState(null);

    return (
        <div className="container">
            {Shedule1arr && Object.keys(Shedule1arr).map((key, index) => (
                <div key={index}>
                    <h2
                        onClick={() =>
                            setOpenFormIndex(openFormIndex === index ? null : index)
                        }
                        className="menu-button"
                        style={{ cursor: "pointer", textAlign: "center" }}
                    >
                        {Shedule1arr[key].title}
                    </h2>
                    {openFormIndex === index && Shedule1arr[key].steps && (
                        <StepMenu steps={Shedule1arr[key].steps} />
                    )}
                </div>
            ))}
        </div>
    );
};
*/}


const CourseMenu = ({ courses }) => {
    const [openCourseIndex, setOpenCourseIndex] = useState(null);

    return (
        <ul className="course-menu">
            {courses && courses
                .filter((course) =>
                    course.halfYears && course.halfYears.some((halfYear) => halfYear.link)
                )
                .map((course, index) => (
                    <li key={index} style={{ textAlign: "center", listStyleType: "none" }}>
                        <span
                            onClick={() =>
                                setOpenCourseIndex(openCourseIndex === index ? null : index)
                            }
                            className="menu-button"
                        >
                            {course.courseTitle}
                        </span>
                        {openCourseIndex === index && (
                            <ul className="submenu">
                                {course.halfYears.map(
                                    (halfYear, idx) =>
                                        halfYear.link && (
                                            <li key={idx} style={{ textAlign: "center", listStyleType: "none" }}>
                                                <a
                                                    href={halfYear.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="link-button"
                                                >
                                                    {halfYear.halfYearTitle}
                                                </a>
                                            </li>
                                        )
                                )}
                            </ul>
                        )}
                    </li>
                ))}
        </ul>
    );
};

const StepMenu = ({ steps, isGrafik }) => {
    const [openStepIndex, setOpenStepIndex] = useState(null);

    return (
        <ul className="step-menu" style={{ textAlign: "center", listStyleType: "none" }}>
            {steps && steps.map((step, index) => (
                <li key={index}>
                    {isGrafik ? (
                        <a
                            href={step.links[0]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="menu-button"
                            style={{ backgroundColor: "white", border: "solid 1px #43a5ee", color: "#43a5ee" }}
                        >
                            {step.stepTitle}
                        </a>
                    ) : (
                        <>
                            <span
                                onClick={() =>
                                    setOpenStepIndex(openStepIndex === index ? null : index)
                                }
                                className="menu-button"
                                style={{ backgroundColor: "white", border: "solid 1px #43a5ee", color: "#43a5ee" }}
                            >
                                {step.stepTitle}
                            </span>
                            {openStepIndex === index && <CourseMenu courses={step.courses} />}
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

const ScheduleComponent = () => {
    const [openFormIndex, setOpenFormIndex] = useState(null);

    return (
        <div className="container">
            {Shedule2arr && Object.keys(Shedule2arr).map((key, index) => (
                <div key={index}>
                    <h2
                        onClick={() =>
                            setOpenFormIndex(openFormIndex === index ? null : index)
                        }
                        className="menu-button"
                    >
                        {Shedule2arr[key].title}
                    </h2>
                    {openFormIndex === index && (
                        <StepMenu
                            steps={Shedule2arr[key].steps}
                            isGrafik={Shedule2arr[key].title === "График погашения задолженностей"}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default ScheduleComponent;
