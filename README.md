# CIA Triad Cybersecurity Refresher 🔐

![CIA Triad Infographic](public/cia_triad_infographic.png)

A beginner-friendly cybersecurity awareness project that explains the **CIA Triad** (Confidentiality, Integrity, and Availability) using simple banking examples.

This project turns a core security concept into an easy-to-understand training resource for students, new cybersecurity professionals, and nontechnical audiences.

## Project Overview

The CIA Triad is the foundation behind many cybersecurity controls, policies, and job responsibilities. At its core, Confidentiality is about keeping secrets secret, Integrity focuses on keeping information correct, and Availability ensures that systems and information remain accessible when needed.

The interactive web application uses relatable banking scenarios to show what each pillar looks like when it is protected and when it is broken.

## Learning Objectives

By the end of this refresher, learners should be able to:

1. Define Confidentiality, Integrity, and Availability.
2. Identify which CIA pillar is affected in a security scenario.
3. Connect common cybersecurity controls to each pillar.
4. Explain how cybersecurity roles help protect the CIA Triad.

## Real-World Examples

| Pillar | Protected Example | Compromised Example |
|---|---|---|
| Confidentiality | Only the account owner can view a bank balance | A stranger reads a bank statement |
| Integrity | A transfer arrives exactly as it was sent | A transaction amount is secretly changed |
| Availability | The banking app and ATMs remain operational | The app crashes or an ATM remains offline |

## Security Controls

### Confidentiality
We enforce confidentiality using tools like strong passwords, data encryption, physical access controls, and multifactor authentication.

### Integrity
To maintain integrity, professionals rely on checksums, digital signatures, detailed audit logs, and continuous change monitoring.

### Availability
Keeping systems available involves maintaining secure backups, building redundant systems, planning for disaster recovery, and implementing robust DDoS protection.

## Cybersecurity Career Connection

The CIA Triad applies across many cybersecurity roles. Penetration Testers actively identify weaknesses that could expose, alter, or disrupt systems. Auditors are responsible for verifying that security controls and requirements are strictly followed. Meanwhile, Program Managers coordinate overarching security initiatives and risk-reduction efforts, and Security Engineers focus on designing and maintaining robust technical defenses.

## Why I Created This

Cybersecurity terminology can sound complex when it is introduced without context. I created this refresher to explain the CIA Triad in plain English and connect each concept to situations people already understand.

## Skills Demonstrated

This project demonstrates a solid understanding of cybersecurity fundamentals and security awareness training. It also highlights strong technical communication and web application development skills, along with practical experience in risk scenario analysis and the ability to translate complex technical concepts for nontechnical audiences.

## Future Improvements

Looking ahead, I plan to add an interactive web-based quiz and include more diverse workplace and cloud-security scenarios. I will also be mapping these practical examples directly to the NIST Cybersecurity Framework functions.

## Author

**Janet Kesinro**

Cybersecurity professional focused on vulnerability management, risk, security education, and practical security solutions.

## Running Locally

To run this web application locally, ensure you have Node.js installed, then run the following commands:

```bash
npm install
npm run dev
```

## License

This project is licensed under the MIT License.
