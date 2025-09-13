import prisma from "../config/prismaClient.js";

// Add a new person
export const addPerson = async (req, res) => {
  try {
    const { name, gender, birthdate, vaccinated } = req.body;

    const is_vaccinated = vaccinated === "Yes";
    const vaccine_name = is_vaccinated ? "COVID-19" : null;

    const newPerson = await prisma.people.create({
      data: {
        name,
        gender,
        birthdate: new Date(birthdate),
        is_vaccinated,
        vaccine_name,
      },
    });

    res.json({ success: true, data: newPerson });
  } catch (err) {
    console.error("❌ Error adding person:", err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Get all people
export const getPeople = async (req, res) => {
  try {
    const people = await prisma.people.findMany({
      orderBy: { id: "asc" },
    });

    const formatted = people.map(person => ({
      ...person,
      vaccinated: person.is_vaccinated ? "Yes" : "No",
    }));

    res.json({ success: true, data: formatted });
  } catch (err) {
    console.error("❌ Error fetching people:", err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
