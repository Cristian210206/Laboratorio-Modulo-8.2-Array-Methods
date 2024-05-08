type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// Apartado 1

const obtenPacientesAsignadosAPediatria : Pacientes[] = pacientes.filter(
  (pacientes) => pacientes.especialidad === "Pediatra"
)

console.log(obtenPacientesAsignadosAPediatria)

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAños : Pacientes[] = pacientes.filter(
  (pacientes) => pacientes.especialidad === "Pediatra" && pacientes.edad < 10
)

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAños)

// Apartado 2
  
const activarProtocoloUrgencia : boolean = pacientes.some(
  (pacientes) => pacientes.temperatura > 39 && pacientes.frecuenciaCardiaca > 100
)

console.log(`Activar protocolo de urgencia: ${activarProtocoloUrgencia}`)

// Apartado 3

const reasignaPacientesAMedicoFamilia = (pacientes :Pacientes[]) : Pacientes[] => pacientes.map(function (paciente) {
  if(paciente.especialidad === "Pediatra") {
    return {
      ...paciente,
      especialidad: "Medico de familia"
    }
  } else {
    return {
      ...paciente,
    }
  }
})

console.log(reasignaPacientesAMedicoFamilia(pacientes))

// Apartado 4

const HayPacientesDePediatria = pacientes.some(
  (pacientes) => pacientes.especialidad === "Pediatra"
)

console.log(`El pediatra tiene trabajo pendiente: ${HayPacientesDePediatria}`)

// Apartado 5

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const numeroPacientesEspecialidades : NumeroPacientesPorEspecialidad = {
  medicoDeFamilia: 0,
  pediatria: 0,
  cardiologia: 0,
}

function contarNumeroPacientesEspecialidad(pacientes : Pacientes) {
  switch(pacientes.especialidad) {
    case "Cardiólogo"
    :
    numeroPacientesEspecialidades.cardiologia++
    break
    case "Medico de familia"
    :
    numeroPacientesEspecialidades.medicoDeFamilia++
    break
    case "Pediatra"
    :
    numeroPacientesEspecialidades.pediatria++
    break
    default : ""
}}

const cuentaPacientesPorEspecialidad =  (pacientes.forEach((pacientes) => contarNumeroPacientesEspecialidad(pacientes)), console.log(numeroPacientesEspecialidades))