import React, {useState} from "react";
import "./../css/main.css";

const Shedule1arr = {
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
                                halfYearTitle: "1 полугодие",
                                link: "https://drive.google.com/file/d/1b0m17eQQ4-i_jLQF92-TEUTlJpRiTeKa/view?usp=sharing"
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: "https://drive.google.com/file/d/14BSSOKfS2kmp5lT8Rgs2_nKQFSPWSkDV/view?usp=sharing"
                            }
                        ]
                    },
                    {
                        courseTitle: "2 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: "https://drive.google.com/file/d/1Qfl1q_9SThN9LZ61hKKhNnVXCMGe_3OJ/view?usp=sharing"
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: "https://drive.google.com/file/d/10rhhf9vypxz9nbABk_iCybFgWUK7VQYl/view?usp=sharing"
                            }
                        ]
                    },
                    {
                        courseTitle: "3 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: "https://drive.google.com/file/d/1Le2UeDNe_qlYpOGlsPylcNBvUBSQ0Nh8/view?usp=sharing"
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: "https://drive.google.com/file/d/1Cu-sLZU6p98IMsmsky-b0rieN--W83ub/view?usp=sharing"
                            }
                        ]
                    },
                    {
                        courseTitle: "4 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: "https://drive.google.com/file/d/1Wn_-vZEBLnhZ7kO45DHcgWrGB1keLc1J/view?usp=sharing"
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: "https://drive.google.com/file/d/1VnQEfKMnRwh8tj99AUsSrXMGMMEqUXR9/view?usp=sharing"
                            }
                        ]
                    },
                    {
                        courseTitle: "5 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
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
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: "https://drive.google.com/file/d/1BiMbeEvksdnWFq09RjLLldhtbsmOnReG/view?usp=sharing"
                            }
                        ]
                    },
                    {
                        courseTitle: "2 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: "https://drive.google.com/file/d/1XcQmqRQuVjs7i4pIpx50AJ49XRpM8o_G/view?usp=sharing"
                            }
                        ]
                    },
                    {
                        courseTitle: "3 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: "https://drive.google.com/file/d/1Le2UeDNe_qlYpOGlsPylcNBvUBSQ0Nh8/view?usp=drive_link"
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: "https://drive.google.com/file/d/1Cu-sLZU6p98IMsmsky-b0rieN--W83ub/view?usp=drive_link"
                            }
                        ]
                    },
                    {
                        courseTitle: "4 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: "https://drive.google.com/file/d/1VnQEfKMnRwh8tj99AUsSrXMGMMEqUXR9/view?usp=drive_link"
                            }
                        ]
                    },
                    {
                        courseTitle: "5 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: "https://drive.google.com/file/d/1_MO5mWDMDbMSd1SPsdYHYVrvHITdm9hb/view?usp=sharing"
                            }
                        ]
                    },
                    {
                        courseTitle: "6 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
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
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "2 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
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
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "2 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: "https://drive.google.com/file/d/16CIyH3iI0DiyNmkHO3uS1bWKj7xq-gCo/view?usp=sharing"
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "3 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: "https://drive.google.com/file/d/1egh8RdYzVfINTzCtbRgfuC1EhAx0oq2d/view?usp=sharing"
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "4 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "5 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
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
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "2 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "3 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "4 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "5 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "6 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
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
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "2 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: "https://drive.google.com/file/d/1mxcJVM-IbTn4h05o4cvraN4hICEXmyMc/view?usp=sharing"
                            },
                            {
                                halfYearTitle: "2 полугодие",
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
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "2 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "3 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "4 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "5 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
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
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "2 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "3 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "4 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "5 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "6 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
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
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: ""
                            }
                        ]
                    },
                    {
                        courseTitle: "2 курс",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: ""
                            }
                        ]
                    }
                ]
            }
        ]
    },
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
            {Shedule1arr && Object.keys(Shedule1arr).map((key, index) => (
                <div key={index}>
                    <h2
                        onClick={() =>
                            setOpenFormIndex(openFormIndex === index ? null : index)
                        }
                        className="menu-button"
                    >
                        {Shedule1arr[key].title}
                    </h2>
                    {openFormIndex === index && (
                        <StepMenu
                            steps={Shedule1arr[key].steps}
                            isGrafik={Shedule1arr[key].title === "График погашения задолженностей"}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default ScheduleComponent;
