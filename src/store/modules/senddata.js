import axios from 'axios'


const actions = {
    sendData({ rootState }) {
        console.log('ACTION')
        //collect all data
        console.log(rootState)
        //Iteriert ueber alle gegebenen Antworten
        //TODO: Antworten an das Backen schicken und eine ID mitsenden, damit ein Bneutzer identifiziert werden kann
        let i = 1;
        rootState.answers.answers.forEach(element => {
            let question = element.question
            let answer = element.answer
            let code = rootState.code.code

            var data = `{"data": {"type": "node--answer", "attributes": {"title": "Antwort ${i}", "field_answer_question": "${question}", "field_answer_answer":"${answer}", "field_answer_user_code":"${code}"}}}`
            //console.log(bodyData)
            i++

            var config = {
                method: 'post',
                url: 'http://localhost:8080/web/jsonapi/node/answer',
                headers: {
                  'Accept': 'application/vnd.api+json',
                  'Content-Type': 'application/vnd.api+json',
                  'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ='
                },
                data : data
              };

              axios(config)
              .then(function (response) {
                console.log(JSON.stringify(response.data));
              })
              .catch(function (error) {
                console.log(error);
              });
        });

        //TODO: Highlights an das Backend schicken
        let j = 1;

        rootState.highlight.highlights.forEach(element => {
          //TODO: Ueber das highlight array iterieren
          //console.log(element)
          let highlight_text = element.text
          let highlight_id = element.id
          let code2 = rootState.code.code

          var data = `{"data": {"type": "node--highlight", "attributes": {"title": "Highlight ${j}", "field_highlight_text": "${highlight_text}", "field_rezensions_id":"${highlight_id}", "field_answer_user_code":"${code2}"}}}`
          j++

          var config = {
            method: 'post',
            url: 'http://localhost:8080/web/jsonapi/node/highlight',
            headers: {
              'Accept': 'application/vnd.api+json',
              'Content-Type': 'application/vnd.api+json',
              'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ='
            },
            data : data
          };

          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
        })


        //console.log(rootState.highlight)
    }
}

export default {
    namespaced: true,
    actions
}