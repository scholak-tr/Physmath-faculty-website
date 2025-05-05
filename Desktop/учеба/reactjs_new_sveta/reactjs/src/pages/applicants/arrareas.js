import areas1 from "./../../img/areas1.png";
import areas2 from "./../../img/areas2.png";
import areas3 from "./../../img/areas3.png";
import areas4 from "./../../img/areas4.png";
import areas5 from "./../../img/areas5.png";
import areas6 from "./../../img/areas6.png";
import areas7 from "./../../img/areas7.png";
import areas8 from "./../../img/areas8.png";
import areas9 from "./../../img/areas9.png";
import areas10 from "./../../img/areas10.png";
/*import areas11 from "./../../img/areas11.png";
import areas12 from "./../../img/areas12.png";
import areas13 from "./../../img/areas13.png";
import areas14 from "./../../img/areas14.png";
import areas15 from "./../../img/areas15.png";
import areas16 from "./../../img/areas16.png";
import areas17 from "./../../img/areas17.png";
import areas18 from "./../../img/areas18.png";
import areas19 from "./../../img/areas19.png";
import areas20 from "./../../img/areas20.png";*/

const listAreas = {
  bachelor: {
    title: "БАКАЛАВРИАТ",
    about: "Основополагающее высшее образование в области физики и математики с уклоном в прикладные науки.",
    directions: [
      {
        departmentTitle: "Кафедра прикладной математики и вычислительной техники",
        direction: [
          {
            directionName: "Прикладная математика",
            code: "01.03.02",
            areas: [
              {
                image: areas1,
                areasTitle: "Математическое моделирование",
                form: "очная",
                term: "4 года",
                link: "/areas/areas1"
              }
            ]
          }
        ]
      },
      {
        departmentTitle: "Кафедра теоретической физики",
        direction: [
          {
            directionName: "Физика",
            code: "01.03.01",
            areas: [
              {
                image: areas2,
                areasTitle: "Теоретическая физика",
                form: "очная",
                term: "4 года",
                link: "/areas/areas2"
              }
            ]
          }
        ]
      },
      {
        departmentTitle: "Кафедра вычислительной математики и информатики",
        direction: [
          {
            directionName: "Вычислительная математика",
            code: "01.03.03",
            areas: [
              {
                image: areas3,
                areasTitle: "Алгоритмы и структуры данных",
                form: "очная",
                term: "4 года",
                link: "/areas/areas3"
              }
            ]
          }
        ]
      },
      {
        departmentTitle: "Кафедра математической физики",
        direction: [
          {
            directionName: "Математическая физика",
            code: "01.03.01",
            areas: [
              {
                image: areas4,
                areasTitle: "Математические методы в физике",
                form: "очная",
                term: "4 года",
                link: "/areas/areas4"
              }
            ]
          }
        ]
      }
    ]
  },
  specialist: {
    title: "СПЕЦИАЛИТЕТ",
    about: "Углубленное обучение с акцентом на развитие практических навыков в области физики и математики.",
    directions: [
      {
        departmentTitle: "Кафедра прикладной математики",
        direction: [
          {
            directionName: "Прикладная математика",
            code: "01.05.01",
            areas: [
              {
                image: areas5,
                areasTitle: "Математическое моделирование в инженерии",
                form: "очная, заочная",
                term: "5 лет (очная), 5 лет и 6 месяцев (заочная)",
                link: "/areas/areas5"
              }
            ]
          }
        ]
      },
      {
        departmentTitle: "Кафедра физики твердого тела",
        direction: [
          {
            directionName: "Физика",
            code: "01.05.01",
            areas: [
              {
                image: areas6,
                areasTitle: "Физика материалов и нанотехнологии",
                form: "очная, заочная",
                term: "5 лет (очная), 5 лет и 6 месяцев (заочная)",
                link: "/areas/areas6"
              }
            ]
          }
        ]
      }
    ]
  },
  magisters: {
    title: "МАГИСТРАТУРА",
    about: "Продвинутое обучение с фокусом на исследования и аналитические навыки в области физики и математики.",
    directions: [
      {
        departmentTitle: "Кафедра вычислительной математики",
        direction: [
          {
            directionName: "Вычислительная математика",
            code: "01.04.01",
            areas: [
              {
                image: areas7,
                areasTitle: "Математическое моделирование и численные методы",
                form: "очная",
                term: "2 года",
                link: "/areas/areas7"
              }
            ]
          }
        ]
      },
      {
        departmentTitle: "Кафедра теоретической физики",
        direction: [
          {
            directionName: "Физика",
            code: "01.04.02",
            areas: [
              {
                image: areas8,
                areasTitle: "Теоретическая физика и космология",
                form: "заочная",
                term: "2 года",
                link: "/areas/areas8"
              }
            ]
          }
        ]
      }
    ]
  },
 

  /** graduate: {
    title: "АСПИРАНТУРА",
    about: "Подготовка научных кадров для проведения фундаментальных исследований в области физики и математики.",
    directions: [
      {
        departmentTitle: "Кафедра теоретической физики",
        direction: [
          {
            directionName: "Физика",
            areas: [
              {
                image: areas9,
                areasTitle: "Физика элементарных частиц",
                code: "01.06.01",
                form: "очная",
                term: "3 года",
                link: "/areas/areas9"
              }
            ]
          }
        ]
      },
      {
        departmentTitle: "Кафедра прикладной математики",
        direction: [
          {
            directionName: "Прикладная математика",
            areas: [
              {
                image: areas10,
                areasTitle: "Алгоритмы и математическое моделирование",
                code: "01.06.02",
                form: "очная",
                term: "3 года",
                link: "/areas/areas10"
              }
            ]
          }
        ]
      }
    ]
  } */
};

export default listAreas;