export default {
    survey: [
        {
            nid: 1,
            question_type: 'begruessung',
            title: 'Begleitbogen – Hinweise zur Durchführung',
            html: '<p>Das vorliegende Online-Experiment bezieht sich auf den Besuch von Online-Verkaufsplattformen, auf denen man sich über \
            Produkte (wie z. B. Bücher) informieren und diese käuflich erwerben kann. \
            Uns interessiert Ihre ehrliche, persönliche Meinung. Das Online-Experiment findet anonym statt, \
            es werden keine persönlichen Angaben verarbeitet. \
            Einzelne Online-Experimente können nicht auf einzelne Personen zurückgeführt werden.</p> \
            <p> Das Online-Experiment umfasst drei Bereiche:</p> \
                        <ol> \
                            <li>Pre-Befragung</li> \
                            <li>Simulation Einkauf auf einer Online-Verkaufsplattform</li> \
                            <li>Post-Befragung</li> \
                        </ol> \
            <p>Bitte lesen Sie sich alle Anweisungen und Aussagen aufmerksam durch. Nehmen Sie sich ausreichend Zeit, \
             um die Aufgaben überlegt zu bearbeiten. Wenn Ihnen einmal die Entscheidung schwerfällt, überlegen Sie welche Lösung noch am ehesten zutrifft. '
        },
        {
            nid: 2,
            title: '',
            html: '<p>Bitte füllen Sie die folgenden Angaben entsprechend aus. Dies hilft uns zur Erstellung Ihrer eigenen ID."</p>',
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
                    id: 0,
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
                    question: 'Bitte geben Sie ihr Alter an.',
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
                    question: 'Welchen Beruf üben Sie momentan aus?',
                    question_type: 'text',
                    label: 'Beruf'
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
                    question: 'Sind Sie vertraut mit dem Surfen im Internet?',
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
                        },
                        {
                            label: 'Mindestens 1x in 6 Monaten'
                        },
                        {
                            label: 'Höchstens alle halbe Jahre, eher seltener'
                        },
                        {
                            label: 'nie'
                        }
                    ]
                },
            {    
                question: 'Lesen Sie Kundenproduktrezensionen auf Online-Verkaufsplattformen, wenn sie planen, ein Produkt zu kaufen? (Kundenproduktrezensionen sind von Kunden verfasste Texte, in denen Kunden ihre Meinung über Produkte teilen.)',
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
                question: 'Wie oft kaufen Sie typischerweise Bücher auf Online-Verkaufsplattformen?',
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
                    },
                    {
                        label: 'Mindestens 1x in 6 Monaten'
                    },
                    {
                        label: 'Höchstens alle halbe Jahre, eher seltener'
                    },
                    {
                        label: 'nie'
                    }
                ]
            },
            {
                question: 'Lesen Sie Buchrezensionen von anderen Kunden auf Online-Verkaufsplattformen, wenn Sie planen, ein Buch zu kaufen? (Buchrezensionen sind von Kunden verfasste Texte, in denen Kunden ihre Meinung über Bücher teilen.)',
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
        },
        {
            nid: 7,
            title: 'Teil 2: Simulation Einkauf einer Online-Verkaufsplattform',
            html: '<p>Bitte versetzten Sie sich in folgende Situation:</p><p>Sie möchten ein bestimmtes Buch online erwerben und besuchen \
            dazu eine Online-Verkaufsplattform. Sie wollen sich vor dem Kauf über das Buch informieren und prüfen, ob es Ihnen wirklich gefallen könnte \
            Hierfür lesen Sie einige Buchrezensionen...</p>',
            img_src: 'buch_cover.png',
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
            
        },
        {
        nid: 8,
        title: 'Teil 3: Fragen',
        html: 'Bitte beantworten Sie die folgenden Fragen.',
        questions: [
            {
                question: 'Während ich die Buchrezensionen betrachtet habe, \
                konnte ich die meisten Ablenkungen ausblenden.',
                question_type: 'select',
                answeroptions: [
                    {
                        label: 'Stimme überhaupt nicht zu'
                    },
                    {
                        label: 'Stimme teilweise nicht zu'
                    },
                    {
                        label: 'Neutral'
                    },
                    {
                        label: 'Stimme teilweise zu'
                    }, 
                    {
                        label: 'Stimme voll zu'
                    }
                ]
            },
            {
                question: 'Während ich die Buchrezensionen betrachtet habe, war ich in das,\
                was ich tat vertieft.',
                question_type: 'select',
                answeroptions: [
                    {
                        label: 'Stimme überhaupt nicht zu'
                    },
                    {
                        label: 'Stimme teilweise nicht zu'
                    },
                    {
                        label: 'Neutral'
                    },
                    {
                        label: 'Stimme teilweise zu'
                    }, 
                    {
                        label: 'Stimme voll zu'
                    }
                ]
            },
            {
                question: 'Während ich die Buchrezensionen betrachtet habe, war ich in die Aufgabe vertieft,\
                die ich gerade ausführte..',
                question_type: 'select',
                answeroptions: [
                    {
                        label: 'Stimme überhaupt nicht zu'
                    },
                    {
                        label: 'Stimme teilweise nicht zu'
                    },
                    {
                        label: 'Neutral'
                    },
                    {
                        label: 'Stimme teilweise zu'
                    }, 
                    {
                        label: 'Stimme voll zu'
                    }
                ]
            },
            {
                question: 'Als ich die Buchrezensionen betrachtet habe, \
                ließ ich mich sehr leicht durch andere Dinge ablenken. ',
                question_type: 'select',
                answeroptions: [
                    {
                        label: 'Stimme überhaupt nicht zu'
                    },
                    {
                        label: 'Stimme teilweise nicht zu'
                    },
                    {
                        label: 'Neutral'
                    },
                    {
                        label: 'Stimme teilweise zu'
                    }, 
                    {
                        label: 'Stimme voll zu'
                    }
                ]
            },
            {
                question: 'Während ich die Buchrezensionen betrachtet habe,\
                wurde meine Aufmerksamkeit nicht leicht gestört. ',
                question_type: 'select',
                answeroptions: [
                    {
                        label: 'Stimme überhaupt nicht zu'
                    },
                    {
                        label: 'Stimme teilweise nicht zu'
                    },
                    {
                        label: 'Neutral'
                    },
                    {
                        label: 'Stimme teilweise zu'
                    }, 
                    {
                        label: 'Stimme voll zu'
                    }
                ]
            },
            {
                question: 'Während ich die Buchrezensionen betrachtet habe, \
                wurde ich von den Personen im Raum gestört.',
                question_type: 'select',
                answeroptions: [
                    {
                        label: 'Stimme überhaupt nicht zu'
                    },
                    {
                        label: 'Stimme teilweise nicht zu'
                    },
                    {
                        label: 'Neutral'
                    },
                    {
                        label: 'Stimme teilweise zu'
                    }, 
                    {
                        label: 'Stimme voll zu'
                    }
                ]
            },
            {
                question: 'Während ich die Buchrezensionen betrachtet habe,\
                konnte ich mich aufgrund von Störungen im\
                Raum nicht auf die Aufgabe konzentrieren.',
                question_type: 'select',
                answeroptions: [
                    {
                        label: 'Stimme überhaupt nicht zu'
                    },
                    {
                        label: 'Stimme teilweise nicht zu'
                    },
                    {
                        label: 'Neutral'
                    },
                    {
                        label: 'Stimme teilweise zu'
                    }, 
                    {
                        label: 'Stimme voll zu'
                    }
                ]
            },
        ]
    },
    {
        nid: 9,
        title: 'Teil 3: Fragen 2',
        html: 'Bitte beantworten Sie die folgenden Fragen.',
        questions: [
            {
                question: 'Während ich die Buchrezensionen betrachtet habe, habe ich mir Mühe gegeben, \
                die Aufgabe zu bearbeiten.',
                question_type: 'select',
                answeroptions: [
                    {
                        label: 'Stimme überhaupt nicht zu'
                    },
                    {
                        label: 'Stimme teilweise nicht zu'
                    },
                    {
                        label: 'Neutral'
                    },
                    {
                        label: 'Stimme teilweise zu'
                    }, 
                    {
                        label: 'Stimme voll zu'
                    }
                ]
            },
            {
                question: 'Während ich die Buchrezensionen betrachtet habe, war ich motiviert, die Aufgabe zu bearbeiten.',
                question_type: 'select',
                answeroptions: [
                    {
                        label: 'Stimme überhaupt nicht zu'
                    },
                    {
                        label: 'Stimme teilweise nicht zu'
                    },
                    {
                        label: 'Neutral'
                    },
                    {
                        label: 'Stimme teilweise zu'
                    }, 
                    {
                        label: 'Stimme voll zu'
                    }
                ]
            },
            {
                question: 'Während ich die Buchrezensionen betrachtet habe, war ich bereit, \
                mich mit der Aufgabe zu befassen.',
                question_type: 'select',
                answeroptions: [
                    {
                        label: 'Stimme überhaupt nicht zu'
                    },
                    {
                        label: 'Stimme teilweise nicht zu'
                    },
                    {
                        label: 'Neutral'
                    },
                    {
                        label: 'Stimme teilweise zu'
                    }, 
                    {
                        label: 'Stimme voll zu'
                    }
                ]
            },
            {
                question: 'Wenn ich zukünftig auf Online-Verkaufsplattformen Bücher kaufen und mich vorab \
                informieren möchte, würde ich eine Plattform mit der hier gezeigten Darstellungsart \
                von Rezensionen nutzen. ',
                question_type: 'select',
                answeroptions: [
                    {
                        label: 'Stimme überhaupt nicht zu'
                    },
                    {
                        label: 'Stimme teilweise nicht zu'
                    },
                    {
                        label: 'Neutral'
                    },
                    {
                        label: 'Stimme teilweise zu'
                    }, 
                    {
                        label: 'Stimme voll zu'
                    }
                ]
            },
            {
                question: 'Wenn ich zukünftig auf Online-Verkaufsplattformen Bücher kaufen und mich vorab \
                informieren möchte, wäre die Nutzung einer Plattform mit der hier gezeigten Darstellungsart \
                von Rezensionen für mich ansprechend. ',
                question_type: 'select',
                answeroptions: [
                    {
                        label: 'Stimme überhaupt nicht zu'
                    },
                    {
                        label: 'Stimme teilweise nicht zu'
                    },
                    {
                        label: 'Neutral'
                    },
                    {
                        label: 'Stimme teilweise zu'
                    }, 
                    {
                        label: 'Stimme voll zu'
                    }
                ]
            },
            {
                question: 'Die Darstellungsweise der Rezension hat dazu beigetragen, \
                dass ich die für mich relevanten Informationen ohne große Mühe auffinden konnte.',
                question_type: 'select',
                answeroptions: [
                    {
                        label: 'Stimme überhaupt nicht zu'
                    },
                    {
                        label: 'Stimme teilweise nicht zu'
                    },
                    {
                        label: 'Neutral'
                    },
                    {
                        label: 'Stimme teilweise zu'
                    }, 
                    {
                        label: 'Stimme voll zu'
                    }
                ]
            },
            {
                question: 'Die Darstellungsweise der Rezension hat dazu beigetragen, \
                dass es mir leicht gefallen ist, die für mich relevanten Informationen in der Rezension \
                zu finden.',
                question_type: 'select',
                answeroptions: [
                    {
                        label: 'Stimme überhaupt nicht zu'
                    },
                    {
                        label: 'Stimme teilweise nicht zu'
                    },
                    {
                        label: 'Neutral'
                    },
                    {
                        label: 'Stimme teilweise zu'
                    }, 
                    {
                        label: 'Stimme voll zu'
                    }
                ]
            },
            {
                question: 'War Ihnen die hier gezeigte Darstellungsart von Rezensionen zuvor bekannt?',
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
    },




    ]
}