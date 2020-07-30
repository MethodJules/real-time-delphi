export default {
    survey: [
        {
            nid: 1,
            question_type: 'begruessung',
            title: 'Begleitbogen – Hinweise zur Durchführung',
            html: '<p>Der vorliegende Befragungbogen bezieht sich auf den Besuch von Online-Verkaufsplattformen, auf denen man sich über \
            Produkte (wie z. B. Bücher) informieren und diese käuflich erwerben kann. \
            Uns interessiert Ihre ehrliche, persönliche Meinung. Die Befragung findet anonym statt, \
            es werden keine persönlichen Angaben verarbeitet. \
            Einzelne Fragebögen können nicht auf einzelne Personen zurückgeführt werden.</p> \
            <p> Der Befragungbogen umfasst drei Bereiche</p> \
                        <ol> \
                            <li>Pre-Fragebogen</li> \
                            <li>Simulation Einkauf auf einer Online-Verkaufsplattform</li> \
                            <li>Post-Fragebogen</li> \
                        </ol> \
            <p>Bitte lesen Sie sich alle Anweisungen und Aussagen aufmerksam durch. Nehmen Sie sich ausreichend Zeit, \
             um die Aufgaben überlegt zu bearbeiten. Wenn Ihnen einmal die Entscheidung schwerfällt, überlegen Sie welche Lösung noch am ehesten zutrifft. '
        },
        {
            nid: 2,
            title: 'Datenschutz',
            html: '<p>Uns interessiert Ihre ehrliche, persönliche Meinung. Die Befragung findet anonym statt, es werden keine persönlichen Angaben verarbeitet. \
            Einzelne Fragebögen können nicht auf einzelne Personen zurückgeführt werden. \
            Um die Zusammengehörigkeit der Seiten des Befragungsbogens identifizieren zu können \
            und zugleich Ihre Anonymität zu schützen, ist zunächst eine ID herzuleiten. Die ID setzt sich aus den nachfolgenden Antworten zusammen."</p>',
            questions: [
                {
                    question: 'Bitte geben Sie Ihren Geburtsmonat ein.',
                    question_type: 'number',
                    label: 'Geburtsmonat'
                },
                {
                    question: 'Bitte geben Sie den 3. Buchstaben des Familiennamens ein',
                    question_type: 'text',
                    label: '3. Buchstabe'
                },
                {
                    question: 'Bitte geben Sie eine beliebige Zahl von 0-9 ein.',
                    question_type: 'number',
                    label: 'Zahl (0-9)'
                },
                {
                    question: 'Bitte geben Sie den 2. Buchstaben ihres Vornamens ein.',
                    question_type: 'text',
                    label: '2. Buchstabe des Vornamens'
                }
            ]
        },
        {
            nid: 6,
            title: 'Teil 1: Hintergrund zur Person',
            html: '<p>Die folgenden Fragen helfen uns dabei Hintergrundinformationen zu Ihrer Person zu erheben. \
            Bitte kreuzen Sie die für Sie zutreffenden Antworten an bzw. \
            geben Sie eine Antwort.',
            questions: [
                {
                    question: 'Bitte geben Sie ihr Geschlecht an.',
                    question_type: 'select',
                    label: 'Bitte kreuzen Sie ihr Geschlecht an.',
                    answeroptions: [
                        {
                            label: 'Weiblich'
                        },
                        {   
                            label: 'Männlich',
                        },
                        {
                            label: 'Anderes',
                        }
                    ]
                },
                {
                    question: 'Bitte geben Sie ihr Alter an',
                    question_type: 'number',
                    label: 'Alter (in Jahren)',

                }, 
                {
                    question: 'Welchen höchsten beruflichen Ausbildungs- oder Fachhochschulabschluss haben Sie?',
                    question_type: 'select',
                    label: '',
                    answeroptions: [
                        {
                            label: 'Bachelor Uni',
                        },
                        {
                            label: 'Bachelor FH'
                        },
                        {
                            label: 'Master Uni'
                        },
                        {
                            label: 'Master Fachhochschule'
                        },
                        {
                            label: 'Sonstiges'
                        }
                    ]
                },
                {
                    question: 'Welchen Abschluss streben Sie an?',
                    question_type: 'select',
                    answeroptions: [
                        {
                            label: 'Bachelor'
                        }, 
                        {
                            label: 'Master'
                        }
                    ]
                },
                {
                    question: 'Welchen Studiengang studieren Sie?',
                    question_type: 'text',
                    label: 'Studiengang'
                },
                {
                    question: 'Wie lange nutzen Sie schon internetfähige Endgeräte (wie Tablet, Smartphone, Laptop, Desktop-PC)?',
                    question_type: 'select',
                    answeroptions: [
                        {
                            label: '0 Jahre'
                        },
                        {
                            label: '< 1 Jahr'
                        },
                        {
                            label: '1-2 Jahre'
                        },
                        {
                            label: '3-4 Jahre'
                        }, 
                        {
                            label: '5-6 Jahre'
                        },
                        {
                            label: '7-8 Jahre'
                        },
                        {
                            label: '> 8 Jahre'
                        }
                    ]
                },
                {
                    question: 'Wie viele Stunden nutzen Sie durchschnittlich ein internetfähiges Endgerät (wie Tablet, Smartphone, Laptop, Desktop-PC) am Tag?',
                    question_type: 'select',
                    answeroptions: [
                        {
                            label: '0 Stunden'
                        },
                        {
                            label: '< 1 Stunde'
                        },
                        {
                            label: '1-2 Stunden'
                        },
                        {
                            label: '3-4 Stunden'
                        }, 
                        {
                            label: '5-6 Stunden'
                        },
                        {
                            label: '7-8 Stunden'
                        },
                        {
                            label: '> 8 Stunden'
                        }
                    ]
                },
                {
                    question: 'Sind Sie vertraut mit dem Internet?',
                    question_type: 'select',
                    answeroptions: [
                        {
                            label: 'Ja'
                        },
                        {
                            label: 'Nein'
                        }
                    ]
                },
                {
                    question: 'Wie oft kaufen Sei typischerweise Produkte auf Online-Verkaufsplattformen?',
                    question_type: 'select',
                    answeroptions: [
                        {
                            label: 'Mindestens 1x im Monat'
                        },
                        {
                            label: 'Mindestens 1x in 2 Monaten'
                        },
                        {
                            label: 'Mindestens 1x in 3 Monaten'
                        },
                        {
                            label: 'Mindestens 1x in 4 Monaten'
                        },
                        {
                            label: 'Mindestens 1x in 5 Monaten'
                        }
                    ]
                }
            ]
        },
        {
            nid: 7,
            title: 'Teil 2: Simulation Einkauf einer Online-Verkaufsplattform',
            html: '<p>Bitte versetzten Sie sich in folgende Situation:</p><p>Sie möchten ein bestimmtes Buch online erwerben und besuchen \
            dazu eine Online-Verkaufsplattform. Sie wollen sich vor dem Kauf über das Buch informieren und prüfen, ob es Ihnen wirklich gefallen könnte \
            Hierfür lesen Sie einige Buchrezensionen...</p>',
            img_src: 'https://picsum.photos/510/300?random',
            buch: 'Worüber wir schweigen',
            questions: [
                {
                    question: 'Haben Sie das oben aufgeführte Buch bereits gelesen?',
                    question_type: 'select',
                    answeroptions: [
                        {
                            label: 'Ja'
                        },
                        {
                            label: 'Nein'
                        }
                    ]
                }
            ]
            
        }
    ]
}