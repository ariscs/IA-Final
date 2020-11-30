const data = {
  enfermedades: [
    {
      id: 1,
      name: "Artritis reumatoide",
      val: [0, 0.9, 0.6, 0.84, 0, 0.82, 0.92, 0.89, 0.95, 0.3, 0.3, 0, 0, 0.01, 0],
      tratamiento: "Los estudios clínicos indican que la remisión de los síntomas es más probable cuando el tratamiento comienza temprano con medicamentos conocidos como medicamentos antirreumáticos modificadores de la enfermedad (DMARD). El tipo de medicamento que te recomiende el médico dependerá de la gravedad de los síntomas y del tiempo que hayas tenido artritis reumatoide.",
      url: "https://medlineplus.gov/spanish/rheumatoidarthritis.html"
    },
    {
      id: 2,
      name: "Osteoporosis",
      val: [0.5, 0.92, 0, 0.3, 0.8, 0.89, 0.9, 0.4, 0.96, 0.6, 0, 0, 0.01, 0.4, 0],
      tratamiento: "Las pautas generales para el tratamiento se basan en recomendar una cantidad adecuada de calcio en la dieta, la práctica de ejercicio físico y el empleo de medicamentos que contribuyan al mantenimiento o aumento de la masa ósea.",
      url: "https://medlineplus.gov/spanish/osteoporosis.html"
    },
    {
      id: 3,
      name: "Parálisis supranuclear progresiva",
      val: [0, 0.98, 0, 0, 0.98, 0.8, 0.5, 0.68, 0.1, 0.96, 0.98, 0.99, 0.8, 0.95, 0.1],
      tratamiento: "Si bien no existe una cura para la parálisis supranuclear progresiva, hay tratamientos disponibles para ayudar a aliviar los síntomas de este trastorno. Estas son algunas de las opciones: medicamentos para la enfermedad de Parkinson (aumentan los niveles de una sustancia química cerebral implicada en los movimientos musculares fluidos y controlados. La eficacia de estos medicamentos es limitada y suele ser temporal, ya que dura unos dos o tres años), Botox (que se puede inyectar en pequeñas dosis en los músculos alrededor de los ojos. El bótox bloquea las señales químicas que hacen que los músculos se contraigan, lo que puede mejorar los espasmos de los párpados), Anteojos con lentes bifocales o prismas (pueden ayudar a aliviar los problemas para mirar hacia abajo. Las lentes de prisma permiten a las personas con parálisis supranuclear progresiva ver hacia abajo sin mover los ojos en esa dirección), Evaluaciones del habla y de la deglución para aprender técnicas de deglución más seguras y Fisioterapia y terapia ocupacional para mejorar el equilibrio.",
      url: "https://medlineplus.gov/spanish/progressivesupranuclearpalsy.html"
    },
    {
      id: 4,
      name: "Parkinson",
      val: [0, 0.99, 0, 0, 0, 0.79, 0.6, 0.39, 0.3, 0.99, 0.49, 0.75, 0.7, 0.87, 0],
      tratamiento: "El tratamiento de la enfermedad de Parkinson consiste en mejorar, o al menos mantener o prolongar la funcionalidad del enfermo durante el mayor tiempo posible. En la actualidad, el tratamiento puede ser de tres tipos: farmacológico, quirúrgico y rehabilitador. Estos pueden ser fármacos orales que combinan carbidopa o benserazida, bromocriptina, selegilina, electrodos, estimulación del cerebro mediante pulsos magnéticos, mplantación de un dispositivo médico llamado marcapasos cerebral o ejercicios.",
      url: "https://medlineplus.gov/spanish/parkinsonsdisease.html"
    },
    {
      id: 5,
      name: "Tay-Sachs",
      val: [0, 0, 0.7, 0.1, 0, 0.96, 0.59, 0.3, 0.42, 0.95, 0.89, 0.92, 0.91, 0.93, 0],
      tratamiento: "Aunque actualmente no hay tratamientos efectivos para la TSD, avances recientes en la detección de portadores ha ayudado a reducir la prevalencia de la enfermedad en poblaciones de alto riesgo. Los portadores se pueden identificar mediante pruebas de la actividad de la Hex-A o mediante pruebas de ADN que detecten mutaciones genéticas concretas. Además, actualmente se están investigando inhibidores de la síntesis de gangliósidos y terapias de sustitución de la enzima Hex-A como tratamientos potenciales para la enfermedad de Tay-Sachs.",
      url: "https://medlineplus.gov/spanish/taysachsdisease.html"
    },
    {
      id: 6,
      name: "Esclerosis lateral amiotrófica",
      val: [0, 0, 0, 0.5, 0.98, 0.91, 0.7, 0.1, 0.98, 0.9, 0.5, 0.99, 0.5, 0.2, 0],
      tratamiento: "Por ahora, no existe ningún tratamiento probado contra la ELA. Sin embargo, el reciente descubrimiento de determinados factores de crecimiento neuronal y de agentes bloqueantes del glutamato parece prometedor en la interrupción del avance de la enfermedad, aunque no existe aún ningún fármaco que la cure. Sí existen fármacos para combatir el conjunto de síntomas que acompañan a la enfermedad, como son los calambres, la espasticidad, las alteraciones en el sueño o los problemas de salivación. Existen numerosas estrategias muy eficaces para cuando aparecen las alteraciones respiratorias o cuando surgen problemas relacionados con las secreciones. Los médicos rehabilitadores, fisioterapeutas, licenciados en actividad física, terapeutas ocupacionales y logopedas son los profesionales encargados de asegurar la independencia funcional a través del ejercicio y la utilización de los equipos técnicos oportunos.",
      url: "https://medlineplus.gov/spanish/amyotrophiclateralsclerosis.html"
    },
    {
      id: 7,
      name: "Esclerosis múltiple",
      val: [0.5, 0.5, 0, 0.01, 0, 0.7, 0.8, 0.5, 0.01, 0.92, 0.9, 0.1, 0.85, 0.93, 0],
      tratamiento: "Por lo general, el tratamiento de la esclerosis múltiple se centra en acelerar la recuperación después de los ataques, en desacelerar el avance de la enfermedad y en tratar los síntomas. Algunas personas tienen síntomas tan leves que el tratamiento no es necesario. Algunos pueden abarcar corticoesteroides, plasmaféresis, interferones beta. o acetato de glatiramer (Copaxone, Glatopa), Gilenya, Tecfidera, Aubagio, Mayzent, Ocrevus, Tysabri y Campath o Lemtrada. Ademas de combatir los signos y sintomas con fisioterapia, relajantes musculares, medicamentos para reducir la fatiga y para aumentar la velocidad al caminar, entre otros.",
      url: "https://medlineplus.gov/spanish/multiplesclerosis.html"
    },
    {
      id: 8,
      name: "Alzheimer",
      val: [0, 0.97, 0, 0.1, 0, 0.98, 0.6, 0.2, 0, 0.2, 0.1, 0.9, 0.99, 0.98, 0.99],
      tratamiento: "Los medicamentos actuales para la enfermedad de Alzheimer pueden ayudar por un tiempo con los síntomas de la memoria y otros cambios cognitivos. Actualmente, se utilizan dos tipos de medicamentos para tratar los síntomas cognitivos: Inhibidores de la colinesterasa y Memantina (Namenda). Ademas, se debe crear un ambiente de seguridad y contencion, donde podamos, por ejemplo, mantener las llaves, billeteras, teléfonos móviles y otros objetos de valor siempre en el mismo lugar de la casa para que no se pierdan, hacer arreglos para que las cuentas estén en pago automático y depósito automático, llevar un teléfono móvil con capacidad de ubicación para que cualquier persona responsable del cuidado pueda rastrear la ubicación, asegurarse de que los turnos regulares sean el mismo día a la misma hora, tanto como sea posible, entre otros.",
      url: "https://medlineplus.gov/spanish/alzheimersdisease.html"
    },
    {
      id: 9,
      name: "Temblor esencial",
      val: [0, 0.99, 0.98, 0, 0, 0.9, 0.5, 0.1, 0, 0.7, 0.2, 0.6, 0.67, 0.89, 0],
      tratamiento: "Unicamente existen tratamientos medicos a base de medicamentos que presentamos aqui, ademas de algunos experimentales. Alguno de ellos son: Betabloqueantes (normalmente utilizados para tratar la presión arterial alta), medicamentos anticonvulsivos, tranquilizantes (estos medicamentos deben usarse con precaución porque pueden crear adicción) e inyecciones de toxina onabotulínica tipo A (las inyecciones de bótox podrían resultar útiles para tratar algunos tipos de temblores, en especial temblores de la cabeza y la voz).",
      url: "https://medlineplus.gov/spanish/ency/article/000762.htm"
    },
    {
      id: 10,
      name: "Degeneración macular asociada a la edad",
      val: [0, 0.99, 0, 0, 0, 0.75, 0.6, 0.6, 0, 0.1, 0.99, 0, 0.8, 0.88, 0],
      tratamiento: "Hasta hace poco no había un tratamiento eficaz de esta enfermedad degenerativa. Desde hace unos años existen varios fármacos para su tratamiento. Son medicamentos denominados antiangiogénicos que se inyectan directamente en la cavidad vítrea y pueden ser de diferentes tipos. El bevacizumab y el ranibizumab se unen al VEGF (Vascular Endothelial Growth Factor o factor de crecimiento del endotelio vascular), Pegaptanib impide la transmisión de la señal del receptor, inhibiendo el proceso de angiogénesis. Con los medicamentos se consigue estabilizar e incluso mejorar la agudeza visual en un pequeño porcentaje de estos pacientes, si bien en la mayor parte se sigue deteriorando la función visual.",
      url: "https://medlineplus.gov/spanish/ency/article/001000.htm"
    },
    {
      id: 11,
      name: "Encefalopatía traumática crónica",
      val: [0, 0, 0, 0, 0, 0.8, 0, 0.3, 0, 0.78, 0.45, 0.68, 0.82, 0.98, 0.98],
      tratamiento: "Se necesita más investigación sobre los tratamientos, pero el enfoque actual consiste en prevenir la lesión en la cabeza. También es importante estar informado acerca de las últimas recomendaciones para detectar y controlar una lesión cerebral traumática.",
      url: "https://www.mayoclinic.org/es-es/diseases-conditions/chronic-traumatic-encephalopathy/symptoms-causes/syc-20370921"
    },
    {
      id: 12,
      name: "Síndrome de Marfan",
      val: [0, 0, 0, 0, 0, 0.6, 0.86, 0.95, 0.5, 0.3, 0.99, 0, 0.4, 0.36, 0],
      tratamiento: "Si bien no existe una cura para el síndrome de Marfan, el tratamiento se centra en la prevención de las diversas complicaciones de esta enfermedad. Para lograr esto, tendrás que controlarte regularmente para detectar si los daños provocados por la enfermedad avanzan.",
      url: "https://medlineplus.gov/spanish/marfansyndrome.html"
    },
  ],
  sintomas: [
    {
      id: 1,
      name: "Género."
    },
    {
      id: 2,
      name: "Edad."
    },
    {
      id: 3,
      name: "Antecedentes familiares."
    },
    {
      id: 4,
      name: "Alta temperatura o fiebre."
    },
    {
      id: 5,
      name: "Neumonía."
    },
    {
      id: 6,
      name: "Problemas generales de rendimiento: cansancio, pérdida del apetito, pérdida de masa muscular, sordera."
    },
    {
      id: 7,
      name: "Dolor o problemas en las extremidades (articulaciones sensibles, infecciones músculos, esqueleto, extremidades: ojos, boca, cuello, nariz, sensibles o palpación, hinchazón  (muñecas, rodillas, tobillos, codos, caderas, hombros y/o mandíbula)."
    },
    {
      id: 8,
      name: "Afectación de órganos (piel, anemia, alteraciones hematológicas, pulmones, corazón, vasos sanguíneos, ojos, riñones, hígado, alteraciones neuronales, glándulas salivales, tejido nervioso, médula ósea)."
    },
    {
      id: 9,
      name: "Deformidad o lesiones en la estructura ósea (columna vertebral, muñeca y/o caderas)."
    },
    {
      id: 10,
      name: "Ataxia/Alteración en el sistema nervioso autónomo (crisis epilépticas, movimientos involuntarios, descoordinación del cuerpo, caminar torpe y/o sin agarre en manos)."
    },
    {
      id: 11,
      name: "Problemas asociados a la vista (vista cansada, enfocar, puntos ciegos, sensibilidad a la luz, pérdida parcial o absoluta de la vista, sensibilidad al contraste, doble vista)."
    },
    {
      id: 12,
      name: "Problemas para hablar y tragar."
    },
    {
      id: 13,
      name: "Problemas de concentración, orientación, destreza/razonamiento, alteraciones del sueño."
    },
    {
      id: 14,
      name: "Cambios en la estabilidad emocional, conducta impulsiva, depresión, ansiedad, estrés."
    },
    {
      id: 15,
      name: "Demencia/Pérdida de memoria."
    },
  ]
}

export default data;
