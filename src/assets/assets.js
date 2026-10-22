import appointment_img from './appointment_img.png'
import header_img2 from './header_img2.png'
import group_profile from './group_profile.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import banner_img from './banner_img.png'
import banner_img2 from './banner_img2.jpg'
import pic1 from './faceless_profile_pic.jpg'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import hijab_illustration from './hijab_illustration.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'
import nisacareLogo from './nisacare-logo (2).svg'


export const assets = {
    appointment_img,
    header_img2,
    group_profile,
    nisacareLogo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    pic1,
    hijab_illustration,
    banner_img,
    banner_img2
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: hijab_illustration
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Aisha Bello',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS, University of Ilorin',
        experience: '4 Years',
        about: 'Dr. Aisha is a general physician who focuses on everyday health concerns, from fevers and infections to blood pressure and diabetes checks. She believes in taking time to listen so every patient leaves with a clear plan.',
        fees: 5000,
        address: {
            line1: 'Al-Noor Specialist Hospital, 12 Ahmadu Bello Way',
            line2: 'GRA, Ilorin, Kwara State'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Fatima Abdullahi',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS, Ahmadu Bello University, Zaria',
        experience: '3 Years',
        about: 'Dr. Fatima provides care for women at every stage of life, including routine checkups, antenatal care and family planning. She is known for a calm, respectful approach that helps patients feel at ease.',
        fees: 8000,
        address: {
            line1: 'Crescent Care Hospital, 27 Aminu Kano Crescent',
            line2: 'Wuse II, Abuja, FCT'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Zainab Yusuf',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS, Bayero University Kano',
        experience: '1 Years',
        about: 'Dr. Zainab Yusuf treats skin, hair and nail conditions such as acne, eczema and fungal infections. She focuses on simple, affordable treatment plans suited to the Nigerian climate.',
        fees: 6000,
        address: {
            line1: 'Madina Specialist Hospital, 37 Zaria Road',
            line2: 'Gwale, Kano, Kano State'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Maryam Ibrahim',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS, University of Lagos',
        experience: '2 Years',
        about: 'Dr. Maryam cares for babies, children and teenagers, from routine immunisations to childhood infections. Parents appreciate her gentle way with young patients and her clear advice on growth and nutrition.',
        fees: 5000,
        address: {
            line1: 'Rahma Children\'s Hospital, 47 Adeola Odeku Street',
            line2: 'Victoria Island, Lagos, Lagos State'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Hauwa Sani',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS, Usmanu Danfodiyo University, Sokoto',
        experience: '4 Years',
        about: 'Dr. Hauwa diagnoses and manages conditions of the brain and nerves, including headaches, epilepsy and stroke recovery. She explains each step of treatment clearly so patients and families know what to expect.',
        fees: 10000,
        address: {
            line1: 'Nur Medical Centre, 57 Sultan Abubakar Road',
            line2: 'Sokoto, Sokoto State'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Khadijah Lawal',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS, University of Ibadan',
        experience: '4 Years',
        about: 'Dr. Khadijah specialises in migraines, dizziness, nerve pain and sleep-related disorders. She combines careful examination with practical lifestyle guidance to help patients manage long-term conditions.',
        fees: 10000,
        address: {
            line1: 'Hikma Specialist Hospital, 57 Ring Road',
            line2: 'Challenge, Ibadan, Oyo State'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Amina Garba',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS, Ahmadu Bello University, Zaria',
        experience: '4 Years',
        about: 'Dr. Amina offers family medicine for all ages, with a focus on preventive care, vaccinations and managing chronic conditions. She enjoys building long-term relationships with the families she looks after.',
        fees: 5000,
        address: {
            line1: 'Amanah Hospital, 17 Ali Akilu Road',
            line2: 'Kaduna, Kaduna State'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Rukayya Danjuma',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS, University of Maiduguri',
        experience: '3 Years',
        about: 'Dr. Rukayya focuses on safe pregnancy and childbirth, as well as menstrual and fertility concerns. She is passionate about maternal health education in her community.',
        fees: 8000,
        address: {
            line1: 'Shifa Women\'s Hospital, 27 Baga Road',
            line2: 'Maiduguri, Borno State'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Halima Suleiman',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS, Obafemi Awolowo University',
        experience: '1 Years',
        about: 'Dr. Halima helps patients with acne, pigmentation, allergies and common skin infections. She is dedicated to safe, evidence-based skincare advice that fits every budget.',
        fees: 6000,
        address: {
            line1: 'Safe Haven Hospital, 37 Allen Avenue',
            line2: 'Ikeja, Lagos, Lagos State'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Safiya Musa',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS, University of Abuja',
        experience: '2 Years',
        about: 'Dr. Safiya cares for newborns and young children, with a special interest in child nutrition and development. She works closely with parents to catch problems early and keep children healthy.',
        fees: 5000,
        address: {
            line1: 'Mercy Gate Hospital, 47 Gimbiya Street',
            line2: 'Garki, Abuja, FCT'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Ramatu Abubakar',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS, University of Jos',
        experience: '4 Years',
        about: 'Dr. Ramatu treats seizure disorders, nerve problems and memory difficulties in adults and older patients. Her patient, step-by-step approach helps families understand and cope with long-term conditions.',
        fees: 10000,
        address: {
            line1: 'Plateau Care Hospital, 57 Rayfield Road',
            line2: 'Jos, Plateau State'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Nafisa Balogun',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS, Lagos State University',
        experience: '4 Years',
        about: 'Dr. Nafisa focuses on stroke prevention, head injury follow-up and movement disorders. She emphasises early diagnosis and rehabilitation so patients can return to daily life sooner.',
        fees: 10000,
        address: {
            line1: 'Zamzam Specialist Hospital, 57 Awolowo Road',
            line2: 'Ikoyi, Lagos, Lagos State'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Hadiza Mohammed',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS, Bayero University Kano',
        experience: '4 Years',
        about: 'Dr. Hadiza provides general consultations, health screenings and treatment for common illnesses such as malaria and typhoid. She is known for clear explanations and practical, affordable advice.',
        fees: 5000,
        address: {
            line1: 'Al-Amin Hospital, 17 Ibrahim Taiwo Road',
            line2: 'Kano, Kano State'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Sakinah Raji',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS, University of Ilorin',
        experience: '3 Years',
        about: 'Dr. Sakinah provides women\'s health services including antenatal care, cycle disorders and menopause support. She is committed to a private, comfortable and judgement-free consultation experience.',
        fees: 8000,
        address: {
            line1: 'Noor Maternity Hospital, 27 Taiwo Road',
            line2: 'Ilorin, Kwara State'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Maimuna Aliyu',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS, Ahmadu Bello University, Zaria',
        experience: '1 Years',
        about: 'Dr. Maimuna treats eczema, hair loss and skin allergies, and offers guidance on daily skincare routines. She believes good skin health starts with simple habits and the right diagnosis.',
        fees: 6000,
        address: {
            line1: 'Baraka Medical Centre, 37 Constitution Road',
            line2: 'Kaduna, Kaduna State'
        }
    },


]
    