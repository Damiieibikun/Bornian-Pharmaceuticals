let errorMsg = document.getElementById('error-msg'); // error messages
let errorNum = document.getElementById('errorNum');
let errorEm = document.getElementById('errorEm');


let bookingSection = document.getElementById('bookingDetails') // elements
let firstname = document.getElementById('firstname')
let lastname = document.getElementById('lastname')
let age = document.getElementById('age')
let date = document.getElementById('date')
let gender = document.getElementById('gender')
let time = document.getElementById('time')
let email = document.getElementById('email')
let phone = document.getElementById('phonenumber')
let bookingForm = document.getElementById('bookingForm')
let loader = document.getElementById('loader')
let physician = document.getElementById('physician')
let otherconditions = document.getElementById('otherconditions')

const today = new Date().toISOString().slice(0, 10) // get todays date
date.setAttribute('min', `${today}`)
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function validateEmpty(element) { // validate empty field
    let validated = false
    if (element.value.trim() === '') {
        element.classList.add('errorInput')
        errorMsg.classList.remove('hidden')
        errorMsg.classList.add('absolute')
    } else {
        validated = true
        element.classList.remove('errorInput')
        errorMsg.classList.add('hidden')
    }
    return validated
}

function validateEmail(element) { // validate email
    let validated = false
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (element.value.trim() === '') {
        element.classList.add('errorInput')
        errorMsg.classList.remove('hidden')
    } else if ((!emailRegex.test(element.value.trim()))) {
        element.classList.add('errorInput')
        errorEm.classList.remove('hidden')
    } else {
        validated = true
        element.classList.remove('errorInput');
        errorMsg.classList.add('hidden');
        errorEm.classList.add('hidden');
    }
    return validated
}

function validateNum(element) { // validate number
    let validated = false
    const numRegex = /^\s*(\d+(\.\d+)?)(\s*,\s*(\d+(\.\d+)?))*\s*$/;
    if (element.value.trim() === '') {
        element.classList.add('errorInput')
        errorMsg.classList.remove('hidden')
    } else if ((!numRegex.test(element.value.trim()))) {
        element.classList.add('errorInput')
        errorNum.classList.remove('hidden')
    } else {
        validated = true
        element.classList.remove('errorInput');
        errorMsg.classList.add('hidden');
        errorNum.classList.add('hidden');
    }
    return validated
}


firstname.addEventListener('blur', () => validateEmpty(firstname)) // check validation
lastname.addEventListener('blur', () => validateEmpty(lastname))
age.addEventListener('blur', () => validateEmpty(age))
date.addEventListener('blur', () => validateEmpty(date))
time.addEventListener('blur', () => validateEmpty(time))
gender.addEventListener('blur', () => validateEmpty(gender))
physician.addEventListener('blur', () => validateEmpty(physician))
email.addEventListener('blur', () => validateEmail(email))
phone.addEventListener('blur', () => validateNum(phone))


class Doctor { // doctor class
    constructor(name, specialization, img, availableDays, availableTimeSlots) {
        this.name = name;
        this.specialization = specialization;
        this.img = img
        this.availableDays = availableDays;
        this.availableTimeSlots = availableTimeSlots;
    }
}

class Illment { // diagnosis class
    constructor(symptom, diagnosis, prescription) {
        this.symptom = symptom;
        this.diagnosis = diagnosis;
        this.prescription = prescription
    }
}


const doctors = [ // new instances of doctors with their details
    new Doctor('Dr. Alice Francis', 'General Practitioner', 'https://cdn.pixabay.com/photo/2016/02/10/13/03/dentist-1191671_960_720.jpg', ['Monday', 'Wednesday', 'Friday'], ['09:00-11:00', '13:00-15:00']),
    new Doctor('Dr. Femi Jones', 'Cardiologist', 'https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568761_1280.jpg', ['Tuesday', 'Thursday'], ['10:00-12:00', '14:00-16:00']),
    new Doctor('Dr. Halima Abdulsalami', 'Neurologist', 'https://cdn.pixabay.com/photo/2017/08/07/14/15/woman-2604283_960_720.jpg', ['Monday', 'Thursday'], ['08:00-10:00', '12:00-14:00']),
    new Doctor('Dr. Sean Brown', 'Gynecologist', 'https://cdn10.phillymag.com/wp-content/uploads/sites/3/2019/11/Temple-Student-Sean-Brown-900-600.jpg', ['Wednesday', 'Friday'], ['09:30-11:30', '13:30-15:30']),
    new Doctor('Dr. Amarachi Wilson', 'Oncologist', 'https://cdn.pixabay.com/photo/2019/10/22/13/37/black-women-4568755_1280.jpg', ['Monday', 'Tuesday'], ['10:00-12:00', '14:00-16:00']),
    new Doctor('Dr. Edet Bobson', 'Dermatologist', 'https://thumbs.dreamstime.com/b/african-american-black-doctor-man-blue-background-73384133.jpg', ['Thursday', 'Friday'], ['09:00-11:00', '13:00-15:00']),
    new Doctor('Dr. Grace Lee', 'Cardiologist', 'https://cdn.pixabay.com/photo/2017/01/29/21/16/nurse-2019420_1280.jpg', ['Monday', 'Wednesday'], ['08:30-10:30', '12:30-14:30']),
    new Doctor('Dr. Temitope Ibikunle', 'Neurologist', 'https://t3.ftcdn.net/jpg/00/97/18/72/360_F_97187283_Rd9bFVj88XqqrOhqFTXckwr40O9jxPTE.jpg', ['Tuesday', 'Thursday'], ['09:00-11:00', '13:00-15:00']),
    new Doctor('Dr. Irene Harris', 'Gynecologist', 'https://cdn.pixabay.com/photo/2024/02/04/18/27/woman-8552807_1280.jpg', ['Wednesday', 'Friday'], ['10:00-12:00', '14:00-16:00']),
    new Doctor('Dr. James Martin', 'Oncologist', 'https://cdn.pixabay.com/photo/2019/07/30/15/57/dentist-4373290_960_720.jpg', ['Monday', 'Thursday'], ['08:00-10:00', '12:00-14:00'])
];

const diagnosis = [
    new Illment('Fever',
        'If the fever is mild (under 101°F or 38.3°C) and accompanied by common cold symptoms, a quick diagnosis (e.g., viral infection) and over-the-counter antipyretics may be sufficient.', {
            medication: 'Ibuprofen 200 mg tablets.',
            dosage: 'Take 1 tablet every 6-8 hours as needed for fever. Do not exceed 6 tablets in 24 hours.',
            duration: 'Continue for 2-3 days until fever resolves.'
        }),
    new Illment('Chest Pain', 'If the pain is mild, associated with recent physical strain, or heartburn, antacids or muscle relaxants might be suggested', {
        medication: 'Omeprazole 20 mg (proton pump inhibitor).',
        dosage: 'Take 1 capsule daily, 30 minutes before breakfast.',
        duration: 'Use for 14 days to relieve symptoms of heartburn.'
    }),
    new Illment('Shortness of Breath', 'If related to a mild respiratory infection or anxiety, managing the underlying cause (e.g., bronchodilators for mild asthma) might be appropriate', {
        medication: 'Albuterol inhaler (bronchodilator).',
        dosage: '2 puffs every 4-6 hours as needed for shortness of breath.',
        duration: 'Use as needed for up to 1 week, or until symptoms improve.'
    }),
    new Illment('Severe Headache', 'If related to tension or migraine (without alarming symptoms), prescribing analgesics and migraine-specific medications might be appropriate', {
        medication: 'Acetaminophen 500 mg.',
        dosage: 'Take 1 tablet every 4-6 hours as needed for headache. Do not exceed 8 tablets in 24 hours.',
        duration: 'Use for up to 5 days as needed.'
    }),
    new Illment('Abdominal Pain', 'If mild and diffuse, associated with constipation, indigestion, or mild gastroenteritis, symptomatic treatment with antacids or laxatives may be recommended', {
        medication: 'Simethicone 125 mg (anti-gas).',
        dosage: 'Take 1 tablet after meals, as needed for abdominal discomfort.',
        duration: 'Use for 1 week or as needed.'
    }),
    new Illment('Dizziness or Fainting', 'If related to orthostatic hypotension, dehydration, or a mild ear infection, conservative management (e.g., hydration, rest) may be appropriate', {
        medication: 'Increase fluid intake (water, oral rehydration solutions)',
        dosage: '8-10 glasses per day.',
        duration: 'Continue for 3-5 days or until symptoms resolve.'
    }),
    new Illment('Persistent Cough', 'If related to a viral infection or mild bronchitis, over-the-counter cough suppressants or antibiotics (if bacterial) may be suggested', {
        medication: 'Dextromethorphan 10 mg/5 ml (cough suppressant).',
        dosage: 'Take 10 ml every 6-8 hours as needed for cough. Do not exceed 60 ml in 24 hours.',
        duration: 'Use for 3-5 days or until symptoms improve.'
    }),
    new Illment('Nausea or Vomiting', 'If mild, related to a recent viral infection or motion sickness, antiemetics and hydration may be sufficient', {
        medication: 'Ondansetron 4 mg (antiemetic).',
        dosage: 'Dissolve 1 tablet on the tongue every 8 hours as needed for nausea.',
        duration: 'Use for 2-3 days as needed.'
    }),
    new Illment('Unexplained Weight Loss', 'If related to a known dietary change or stress, reassurance and monitoring may be enough', {
        medication: 'Nutritional counseling and stress management strategies.',
        dosage: 'Dietary Supplements as instructed on labe;',
        duration: 'Monitor weight and symptoms over the next 2-4 weeks. If symptoms persist, consult a doctor for further evaluation.'
    }),
    new Illment('Rash', ' If mild and localized, associated with a known allergen or irritant, topical steroids or antihistamines may be recommended', {
        medication: 'Hydrocortisone 1% cream.',
        dosage: 'Apply a thin layer to the affected area 2-3 times daily.',
        duration: 'Continue for up to 7 days.'
    })
]

function quickDiagnosis() {
    let symptomDuration = document.getElementById('symptomduration')
    let quickDiagnosis = document.getElementById('quickDignosis')
    let numOfSymptoms = 0
    let oneSymptom = null

    document.querySelectorAll('.form-check-input').forEach((element) => {
        if (element.checked) {
            oneSymptom = element
            numOfSymptoms++
        }
    })


    if (numOfSymptoms === 0) {
        quickDiagnosis.innerHTML = `<p class="text-center text-[18px]">Unable to perform Quick Diagnosis; <br> No symptoms were provided</p>`
    } else if (numOfSymptoms === 1 && symptomDuration.value === '0') {
        let chosenSymptom = diagnosis.find((entry) => {
            return entry.symptom === oneSymptom.nextElementSibling.innerText.trim()
        })

        quickDiagnosis.innerHTML = `<div class="card">
              <h5 class="card-header font-bold text-[20px]">${chosenSymptom.symptom}</h5>
              <div class="card-body">
                <h5 class="card-title">${chosenSymptom.diagnosis}</h5>
                <p class="card-text font-bold">Prescription:</p>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">${chosenSymptom.prescription.medication}</li>
                <li class="list-group-item">${chosenSymptom.prescription.dosage}</li>
                <li class="list-group-item">${chosenSymptom.prescription.duration}</li>
              </ul>

          </div>
        </div>`
    } else {
        quickDiagnosis.innerHTML = `<div>
        <p class="text-3xl font-bold text-center">Urgent!</p>
        <p class="text-center text-[18px]">Due to the severity of the symptoms we strongly advice you book an appointment <br> with one of our physicians related to your illment as soon as possible.</p>
        </div>`

    }

}

function verifyTime(timerange, selectedTime) { // verify time
    let available = false;
    timerange.forEach((slot) => {
        let eachTime = slot.split('-')
        if (eachTime[0] <= selectedTime && eachTime[1] >= selectedTime) {
            available = true
        }
    })

    return available;
}

function showBookingDetails(idx) {
    let bookingReciept = document.getElementById('bookingReciept')
    let appointmentCard = document.getElementById('appointmentCard')
        // get all inputed values
    appointmentCard.innerHTML = `<div class="card border-light mb-3 w-[19rem] md:w-[45rem]">
        <div class="card-header text-2xl bg-gradient-to-bl from-white to-blue-200">Your Appointment Details</div>
        <p class="text-[20px] p-2">Personal Information</p>
        <div class="card-body flex flex-col justify-between md:flex-row">
            <div class="leading-loose">
                <p class="card-text capitalize"><span class="font-bold">Name:</span> ${firstname.value} ${lastname.value}</p>
                <p class="card-text"><span class="font-bold">Age:</span> ${age.value} years</p>
                <p class="card-text capitalize"><span class="font-bold">Sex:</span> ${gender.value}</p>
            </div>
            <div  class="leading-loose">
                <p class="card-text"><span class="font-bold">Phone Number:</span> ${phone.value}</p>
                <p class="card-text"><span class="font-bold">Email:</span> ${email.value}</p>
                
            </div>
        </div>
        <p class="text-[20px] p-2">Other Medical Conditions:</p>
        <div class="card-body">
            <p class="card-text capitalize">${otherconditions.value}</p>
        </div>
        <p class="text-[20px] p-2">Appointment Information</p>
        <div class="card-body flex flex-col justify-between md:flex-row">
            <div  class="leading-loose">
                <p class="card-text"><span class="font-bold">Physician:</span> ${doctors[idx].name} </p>
                <p class="card-text"><span class="font-bold">Specialization:</span> ${physician.value}</p>
            </div>
            <div class="leading-loose">
                <p class="card-text"><span class="font-bold">Date:</span> ${new Date(date.value).toLocaleDateString()}</p>
                <p class="card-text"><span class="font-bold">Time:</span> ${time.value}</p>
            </div>
        </div>
    </div>`

    bookingReciept.classList.remove('hidden');
    bookingReciept.classList.add('flex');
}


// get availiable doctors
function getDoctors() {
    let noDoctors = document.getElementById('noDoctors')
    let allDoctors = document.getElementById('doctors')
    let doctorCard = document.getElementById('doctorsCard')
    let availDocs = document.getElementById('availableDocs')

    let appoitmentInfo = {
        physician: physician.value,
        date: weekday[new Date(date.value).getDay()],
        time: time.value
    }

    let numDoctors = 0

    doctors.forEach((doctor, index) => {
        let timeslotAvaliable = verifyTime(doctor.availableTimeSlots, appoitmentInfo.time)
        if ((doctor.specialization === appoitmentInfo.physician) && (doctor.availableDays.includes(appoitmentInfo.date)) && timeslotAvaliable) {
            noDoctors.classList.add('hidden')
            allDoctors.classList.remove('hidden')
                // append doctor info to card
            doctorCard.innerHTML += `<div class="card text-center" style="width: 18rem;">
                            <img src=${doctor.img} class="card-img-top h-[330px] object-cover" alt=${index}>
                            <div class="card-body flex flex-col gap-2">
                                <h5 class="card-title font-bold">${doctor.name}</h5>
                                <p class="card-text">${doctor.specialization}</p>
                                <p class="card-text">Available: ${doctor.availableDays.join(', ')}</p>
                                <p class="card-text">Time: ${doctor.availableTimeSlots.join(', ')}</p>                               
                                <button class="btn btn-primary bookDoc" id=${index}>Book</button>
                            </div>
                            </div>`
            numDoctors++
        }

    });
    doctors.forEach((doctor, index) => {
        if (numDoctors === 0 && doctor.availableDays.includes(appoitmentInfo.date)) {
            allDoctors.classList.remove('hidden')
            allDoctors.firstElementChild.innerText = 'Other Alternatives:'
            doctorCard.innerHTML += `<div class="card text-center" style="width: 18rem;" id=${index}>
        <img src=${doctor.img} class="card-img-top h-[330px] object-cover" alt=${index}>
        <div class="card-body flex flex-col gap-2">
            <h5 class="card-title font-bold">${doctor.name}</h5>
            <p class="card-text">${doctor.specialization}</p>
            <p class="card-text">Available: ${doctor.availableDays.join(', ')}</p>
             <p class="card-text">Time: ${doctor.availableTimeSlots.join(', ')}</p>
            <button class="btn btn-primary bookDoc" id=${index}>Book</button>
        </div>
        </div>`
        }
    });
    availDocs.classList.remove('hidden');
    availDocs.classList.add('flex');
}

function delay(ms) { // simulate delya
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function loadAvailableDocs(validated) {
    if (validated) {
        bookingSection.classList.add('hidden'); // remove and add necessary styles
        loader.classList.remove('hidden');
        loader.classList.add('flex');
        await delay(2000); // simulate delay
        loader.classList.add('hidden');
        loader.classList.remove('flex');
        getDoctors() // function to get all doctors
        quickDiagnosis() // function for quick diagnosis
    }
}

async function loadBookingDetails(index) {
    document.getElementById('availableDocs').classList.add('hidden')
    loader.classList.remove('hidden');
    loader.classList.add('flex');
    loader.firstElementChild.innerText = 'Please Wait';
    await delay(1000); // simulate delay
    loader.classList.add('hidden');
    loader.classList.remove('flex');
    showBookingDetails(index)
}



bookingForm.addEventListener('submit', function(e) { // submit form
    e.preventDefault();
    let result = validateEmpty(firstname) && validateEmpty(lastname) && validateEmpty(age) && validateEmpty(date) && validateEmpty(time) && validateEmpty(gender) && validateEmail(email) && validateNum(phone) && validateEmpty(physician);
    loadAvailableDocs(result);

})


// book doctor
document.getElementById('doctorsCard').addEventListener('click', function(e) {
    if (e.target.classList.contains('bookDoc')) {
        loadBookingDetails(e.target.id)

    }
})