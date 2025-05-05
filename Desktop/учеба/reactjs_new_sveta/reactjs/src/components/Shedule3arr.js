import React, {useState} from "react";
import "./../css/main.css";

const Shedule3arr = {
    fullTime: {
        title:"График проведения курсовых работ",
        steps:[
            {
                courses: [
                    {
                        courseTitle: "Кафедра бизнес-информатики и математических методов в экономике",
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
                        courseTitle: "Кафедра бухгалтерского учета и аудита",
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
                        courseTitle: "Кафедра финансов и кредита",
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
                        courseTitle: "Кафедра экономики и менеджмента",
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
                        courseTitle: "Кафедра экономической теории и мировой экономики",
                        halfYears: [
                            {
                                halfYearTitle: "1 полугодие",
                                link: ""
                            },
                            {
                                halfYearTitle: "2 полугодие",
                                link: "https://drive.google.com/file/d/12FpLuP5eboP1tXZSJMoJAOLb91XZI7IW/view?usp=sharing"
                            }
                        ]
                    }
                ]
            }, 
        ]
    },
    fullTimeCor: {
        title:"График проведения контрольных работ",
        steps:[
            {
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
                                link: "https://drive.google.com/file/d/1kj4pADM9ZmBrZgijz0tXBYG70bHZjAgR/view?usp=sharing"
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
                                link: "https://drive.google.com/file/d/1Iiq8KjIGr-aMNiEDVwVo9hac6M2SwZPb/view?usp=sharing"
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
                                link: "https://drive.google.com/file/d/1-jMSGcfabGJJHy9C-sM8UqflbNW9Kt_O/view?usp=sharing"
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
                                link: "https://drive.google.com/file/d/1xxD7feSmHDujQVs-RM-BPNiIAUCLAsUv/view?usp=sharing"
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
                                link: "https://drive.google.com/file/d/1Haf0oYHcAgWT5oq6CaAOVMAEkHK0jeiO/view?usp=sharing"
                            }
                        ]
                    }
                ]
            },
        ]
    },
    correspondes: {
        title:"График проведения модульных работ",
        steps:[
            {
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
        ]
    }
};

const HalfYearMenu = ({ halfYears }) => {
    return (
        <ul className="halfyear-menu">
            {halfYears && halfYears.map((halfYear, idx) => (
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
            ))}
        </ul>
    );
};

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
                            <HalfYearMenu halfYears={course.halfYears} />
                        )}
                    </li>
                ))}
        </ul>
    );
};

const StepMenu = ({ steps }) => {
    return (
        <ul className="step-menu">
            {steps && steps.map((step, index) => (
                <li key={index} style={{ textAlign: "center", listStyleType: "none" }}>
                    <CourseMenu courses={step.courses} />
                </li>
            ))}
        </ul>
    );
};

const ScheduleComponent = () => {
    const [openFormIndex, setOpenFormIndex] = useState(null);

    return (
        <div className="container">
            {Shedule3arr && Object.keys(Shedule3arr).map((key, index) => (
                <div key={index}>
                    <h2
                        onClick={() =>
                            setOpenFormIndex(openFormIndex === index ? null : index)
                        }
                        className="menu-button"
                        style={{ textAlign: "center", listStyleType: "none" }}
                    >
                        {Shedule3arr[key].title}
                    </h2>
                    {openFormIndex === index && (
                        <StepMenu steps={Shedule3arr[key].steps} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default ScheduleComponent;
