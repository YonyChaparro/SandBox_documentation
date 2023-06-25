-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cita" (
    "idCita" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fecha" DATETIME NOT NULL,
    "cedulaPaciente" INTEGER NOT NULL,
    "terjetaProfecional" INTEGER NOT NULL,
    "pacienteCedula" INTEGER,
    "medicoTajetaProfecional" INTEGER,
    CONSTRAINT "Cita_pacienteCedula_fkey" FOREIGN KEY ("pacienteCedula") REFERENCES "Paciente" ("cedula") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cita_medicoTajetaProfecional_fkey" FOREIGN KEY ("medicoTajetaProfecional") REFERENCES "Medico" ("tajetaProfecional") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Cita" ("cedulaPaciente", "fecha", "idCita", "terjetaProfecional") SELECT "cedulaPaciente", "fecha", "idCita", "terjetaProfecional" FROM "Cita";
DROP TABLE "Cita";
ALTER TABLE "new_Cita" RENAME TO "Cita";
CREATE TABLE "new_Medico" (
    "tajetaProfecional" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "consultorio" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "StringinEspecialidad" INTEGER NOT NULL,
    "IdEspecialidad" INTEGER,
    CONSTRAINT "Medico_IdEspecialidad_fkey" FOREIGN KEY ("IdEspecialidad") REFERENCES "Especialidad" ("idEspecialidad") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Medico" ("StringinEspecialidad", "apellido", "consultorio", "correo", "nombre", "tajetaProfecional") SELECT "StringinEspecialidad", "apellido", "consultorio", "correo", "nombre", "tajetaProfecional" FROM "Medico";
DROP TABLE "Medico";
ALTER TABLE "new_Medico" RENAME TO "Medico";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
