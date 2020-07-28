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
            und zugleich Ihre Anonymität zu schützen, ist zunächst eine ID herzuleiten. Die ID setzt sich aus den Antworten a) bis d) zusammen."</p>',
            question: 'Bitte geben Sie Ihren Geburtsmonat ein.',
            label: 'Geburtsmonat',
            question_type: 'number',
            answers: 0
        },
        {
            nid: 3,
            title: 'Datenschutz2',
            question: 'Bitte geben Sie den 3. Buchstaben des Familiennamens ein.',
            label: '3. Buchstabe',
            question_type: 'text',
            answers: '',
        },
        {
            nid: 4,
            title: 'Datenschutz3',
            question: 'Bitte geben Sie eine beliebige ganze Zahl von 0-9 ein.',
            label: 'Zahl (0-9)',
            question_type: 'number',
            answers: 0,
        },
        {
            nid: 5,
            title: 'Datenschutz4',
            question: 'Bitte geben Sie den 2. Buchstaben des eigenen Vornamens ein.',
            label: 'Zahl (0-9)',
            question_type: 'number',
            answers: 0,
        },
        {
            nid: 6,
            title: 'Teil 1: Hintergrund zur Person',
            html: '<p>Die folgenden Fragen helfen uns dabei Hintergrundinformationen zu Ihrer Person zu erheben. \
            Bitte kreuzen Sie die für Sie zutreffenden Antworten an bzw. \
            geben Sie eine Antwort.',
            questions: [
                {
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
                    label: 'Bitte geben Sie ihr Alter an',
                }, 
                {
                    label: 'Welchen höchsten beruflichen Ausbildungs- oder Fachhochschulabschluss haben Sie?',
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
                }
            ]
        }
    ]
}