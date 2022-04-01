const sqlite3 = require('sqlite3');c
const fs = require('fs');
const env = require("./env.json");

let ikv01 = new Array(18);
let ikv02 = new Array(18);
let ikv03 = new Array(18);
let ikv04 = new Array(18);
let ikv05 = new Array(18);
let ikv06 = new Array(18);
let ikv07 = new Array(18);
let ikv08 = new Array(18);
let ikv09 = new Array(18);
let ikv10 = new Array(18);
let ikv11 = new Array(18);
let ikv12 = new Array(18);
let ikv13 = new Array(18);

let pkv01 = new Array(18);
let pkv02 = new Array(18);
let pkv03 = new Array(18);
let pkv04 = new Array(18);
let pkv05 = new Array(18);
let pkv06 = new Array(18);
let pkv07 = new Array(18);
let pkv08 = new Array(18);
let pkv09 = new Array(18);
let pkv10 = new Array(18);
let pkv11 = new Array(18);
let pkv12 = new Array(18);
let pkv13 = new Array(18);

let data_tok, data_pos;



const transporter = nodemailer.createTransport({
    service: 'gmail',//smtp.gmail.com  //in place of service use host...
    secure: false,//true
    port: 25,//465
    auth: {
        user: env.user,
        pass: env.pass
    },
    tls: {
        rejectUnauthorized: false
    }
});

function time(){
    let x = new Date(Date.now());
    return x.toString();
}


async function read_pos() {
    (async () => {
        for (let i = 1; i < 14; ++i) {
            await data_read(i);
        }
    })();

    function data_read(i) {
        let db = new sqlite3.Database("C:/SQLite/DB/"+i+"/db.sqlite", (err) => {
            if (err) console.error(err.message);
        });

        db.each(`SELECT id FROM bake LIMIT 1`, (err, row) => {
            if (err) console.error(err.message);
            else {
                data_pos = row.id;

                switch(i) {
                    case 1:
                        pkv01.shift();
                        pkv01.push(parseInt(data_pos));
                        break;
                    case 2:
                        pkv02.shift();
                        pkv02.push(parseInt(data_pos));
                        break;
                    case 3:
                        pkv03.shift();
                        pkv03.push(parseInt(data_pos));
                        break;
                    case 4:
                        pkv04.shift();
                        pkv04.push(parseInt(data_pos));
                        break;
                    case 5:
                        pkv05.shift();
                        pkv05.push(parseInt(data_pos));
                        break;
                    case 6:
                        pkv06.shift();
                        pkv06.push(parseInt(data_pos));
                        break;
                    case 7:
                        pkv07.shift();
                        pkv07.push(parseInt(data_pos));
                        break;
                    case 8:
                        pkv08.shift();
                        pkv08.push(parseInt(data_pos));
                        break;
                    case 9:
                        pkv09.shift();
                        pkv09.push(parseInt(data_pos));
                        break;
                    case 10:
                        pkv10.shift();
                        pkv10.push(parseInt(data_pos));
                        break;
                    case 11:
                        pkv11.shift();
                        pkv11.push(parseInt(data_pos));
                        break;
                    case 12:
                        pkv12.shift();
                        pkv12.push(parseInt(data_pos));
                        break;
                    case 13:
                        pkv13.shift();
                        pkv13.push(parseInt(data_pos));
                        break;
                    default:
                        console.log("KV missing..");
                }
            }
        });

        db.close((err) => {
            if (err) {
                console.error(err.message);
            }
        });
    }

}

async function read_tok() {
    (async () => {
        for (let i = 1; i < 14; ++i) {
            await data_read(i);
        }
    })();

    function data_read(i) {
        fs.readFile("C:/SQLite/DB/" + i + "/Ishtangi.txt", 'utf8', function (err, data) {
            if (err) return console.log(err);
            data_tok = data;

            switch(i) {
                case 1:
                    ikv01.shift();
                    ikv01.push(parseInt(data_tok));
                    break;
                case 2:
                    ikv02.shift();
                    ikv02.push(parseInt(data_tok));
                    break;
                case 3:
                    ikv03.shift();
                    ikv03.push(parseInt(data_tok));
                    break;
                case 4:
                    ikv04.shift();
                    ikv04.push(parseInt(data_tok));
                    break;
                case 5:
                    ikv05.shift();
                    ikv05.push(parseInt(data_tok));
                    break;
                case 6:
                    ikv06.shift();
                    ikv06.push(parseInt(data_tok));
                    break;
                case 7:
                    ikv07.shift();
                    ikv07.push(parseInt(data_tok));
                    break;
                case 8:
                    ikv08.shift();
                    ikv08.push(parseInt(data_tok));
                    break;
                case 9:
                    ikv09.shift();
                    ikv09.push(parseInt(data_tok));
                    break;
                case 10:
                    ikv10.shift();
                    ikv10.push(parseInt(data_tok));
                    break;
                case 11:
                    ikv11.shift();
                    ikv11.push(parseInt(data_tok));
                    break;
                case 12:
                    ikv12.shift();
                    ikv12.push(parseInt(data_tok));
                    break;
                case 13:
                    ikv13.shift();
                    ikv13.push(parseInt(data_tok));
                    break;
                default:
                    console.log("KV missing..");
            }
        });

        //       console.log(i+" "+data_pos+" "+data_tok);
    }





}

async function check_pos() {

    async function mail(i, text) {
        text = text+"\n" +
            "\n" +
            "ikv01: "+ikv01+  "\n" +
            "ikv02: "+ikv02+  "\n" +
            "ikv03: "+ikv03+  "\n" +
            "ikv04: "+ikv04+  "\n" +
            "ikv05: "+ikv05+  "\n" +
            "ikv06: "+ikv06+  "\n" +
            "ikv07: "+ikv07+  "\n" +
            "ikv08: "+ikv08+  "\n" +
            "ikv09: "+ikv09+  "\n" +
            "ikv10: "+ikv10+  "\n" +
            "ikv11: "+ikv11+  "\n" +
            "ikv12: "+ikv12+  "\n" +
            "ikv13: "+ikv13+  "\n" +
            "pkv01: "+pkv01+  "\n" +
            "pkv02: "+pkv02+  "\n" +
            "pkv03: "+pkv03+  "\n" +
            "pkv04: "+pkv04+  "\n" +
            "pkv05: "+pkv05+  "\n" +
            "pkv06: "+pkv06+  "\n" +
            "pkv07: "+pkv07+  "\n" +
            "pkv08: "+pkv08+  "\n" +
            "pkv09: "+pkv09+  "\n" +
            "pkv10: "+pkv10+  "\n" +
            "pkv11: "+pkv11+  "\n" +
            "pkv12: "+pkv12+  "\n" +
            "pkv13: "+pkv13+  "\n" +
            "\n"+
            "-----\n" +
            "С любовью,\n" +
            "Ваш Litovka.daemon";

        const message = {
            from: env.mail1, // Sender address
            to: [env.mail2, env.mail3],         // List of recipients
//            to: env.mail2,
            subject: 'Не верный ввод КВ-'+i, // Subject line
            text: text
        };

        transporter.sendMail(message, function(err, info) {
        });
    }

    function save_pos(i, new_pos) {
        let db = new sqlite3.Database("C:/SQLite/DB/"+i+"/db.sqlite");
        let sql = `UPDATE bake SET id = ?`;
        let text = time()+": корректировка КВ-"+i+" на "+new_pos;

        db.run(sql, new_pos, function(err) {
            if (err) {
                return console.error(err.message);
            }
            console.log(text);
            mail(i, text).catch(console.error);
        });
        db.close();

    }

  //  console.log("КВ-12 "+ikv12[0]+" "+ikv12[179]+" "+pkv12[0]+" "+pkv12[179]);
 //   console.log("КВ-13 "+ikv13[0]+" "+ikv13[179]+" "+pkv13[0]+" "+pkv13[179]);

    /* КЦ-4 */
	if (pkv13[0] !== pkv13[17]
        && !ikv13.some(elem => elem !== 0)
        && ikv12.some(elem => elem > 0)
        && pkv12[0] === pkv12[17])
	    save_pos(12, pkv13[17]);
	if (pkv12[0] !== pkv12[17]
        && !ikv12.some(elem => elem !== 0)
        && ikv13.some(elem => elem > 0)
        && pkv13[0] === pkv13[17])
	    save_pos(13, pkv12[17]);

    /* КЦ-3 */
    if (pkv10[0] !== pkv10[17]
        && !ikv10.some(elem => elem !== 0)
        && ikv11.some(elem => elem > 0)
        && pkv11[0] === pkv11[17]
        && pkv10[17] > 800)
        save_pos(11, pkv10[17]);
    if (pkv11[0] !== pkv11[17]
        && !ikv11.some(elem => elem !== 0)
        && ikv10.some(elem => elem > 0)
        && pkv10[0] === pkv10[17])
        save_pos(10, pkv11[17]);

    if (pkv09[0] !== pkv09[17]
        && !ikv09.some(elem => elem !== 0)
        && ikv10.some(elem => elem > 0)
        && pkv10[0] === pkv10[17])
        save_pos(10, pkv09[17]);
    if (pkv10[0] !== pkv10[17]
        && !ikv10.some(elem => elem !== 0)
        && ikv09.some(elem => elem > 0)
        && pkv09[0] === pkv09[17]
        && pkv10[17] < 800)
        save_pos(9, pkv10[17]);

    if (pkv11[0] !== pkv11[17]
        && !ikv11.some(elem => elem !== 0)
        && ikv09.some(elem => elem > 0)
        && pkv09[0] === pkv09[17]
        && pkv11[17] < 800)
        save_pos(9, pkv11[17]);
    if (pkv09[0] !== pkv09[17]
        && !ikv09.some(elem => elem !== 0)
        && ikv11.some(elem => elem > 0)
        && pkv11[0] === pkv11[17]
        && pkv09[17] > 800)
        save_pos(11, pkv09[17]);


    /* КЦ-2 */
    if (pkv07[0] !== pkv07[17]
        && !ikv07.some(elem => elem !== 0)
        && ikv08.some(elem => elem > 0)
        && pkv08[0] === pkv08[17]
        && pkv07[17] > 600)
        save_pos(8, pkv07[17]);
    if (pkv08[0] !== pkv08[17]
        && !ikv08.some(elem => elem !== 0)
        && ikv07.some(elem => elem > 0)
        && pkv07[0] === pkv07[17])
        save_pos(7, pkv08[17]);

    if (pkv06[0] !== pkv06[17]
        && !ikv06.some(elem => elem !== 0)
        && ikv07.some(elem => elem > 0)
        && pkv07[0] === pkv07[17])
        save_pos(7, pkv06[17]);
    if (pkv07[0] !== pkv07[17]
        && !ikv07.some(elem => elem !== 0)
        && ikv06.some(elem => elem > 0)
        && pkv06[0] === pkv06[17]
        && pkv07[17] < 600)
        save_pos(6, pkv07[17]);

    if (pkv08[0] !== pkv08[17]
        && !ikv08.some(elem => elem !== 0)
        && ikv06.some(elem => elem > 0)
        && pkv06[0] === pkv06[17]
        && pkv08[17] < 600)
        save_pos(6, pkv08[17]);
    if (pkv06[0] !== pkv06[17]
        && !ikv06.some(elem => elem !== 0)
        && ikv08.some(elem => elem > 0)
        && pkv08[0] === pkv08[17]
        && pkv06[17] > 600)
        save_pos(8, pkv06[17]);

    /* КЦ-1 */
    if (pkv01[0] !== pkv01[17]
        && !ikv01.some(elem => elem !== 0)
        && ikv02.some(elem => elem > 0)
        && pkv02[0] === pkv02[17])
        save_pos(2, pkv01[17]);
    if (pkv02[0] !== pkv02[17]
        && !ikv02.some(elem => elem !== 0)
        && ikv01.some(elem => elem > 0)
        && pkv01[0] === pkv01[17])
        save_pos(1, pkv02[17]);

    if (pkv02[0] !== pkv02[17]
        && !ikv02.some(elem => elem !== 0)
        && ikv03.some(elem => elem > 0)
        && pkv03[0] === pkv03[17])
        save_pos(3, pkv02[17]);
    if (pkv03[0] !== pkv03[17]
        && !ikv03.some(elem => elem !== 0)
        && ikv02.some(elem => elem > 0)
        && pkv02[0] === pkv02[17])
        save_pos(2, pkv03[17]);

    if (pkv04[0] !== pkv04[17]
        && !ikv04.some(elem => elem !== 0)
        && ikv05.some(elem => elem > 0)
        && pkv05[0] === pkv05[17])
        save_pos(5, pkv04[17]);
    if (pkv05[0] !== pkv05[17]
        && !ikv05.some(elem => elem !== 0)
        && ikv04.some(elem => elem > 0)
        && pkv04[0] === pkv04[17])
        save_pos(4, pkv05[17]);
}

console.log(time()+": Service started..\n");
setInterval(read_pos,     10000);
setInterval(read_tok,     10000);
setInterval(check_pos,     60000);



