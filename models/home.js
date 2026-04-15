const path = require('path');
const fs = require('fs');
module.exports= class Wish{
    constructor(name,wish)
    {
        this.name=name;
        this.wish=wish;

    }
    save()
    {
        const filepath = path.join(__dirname,'..','data','wishes.json');
        Wish.fetchall(wishes=>
        {
            wishes.push(this);
            fs.writeFile(filepath,JSON.stringify(wishes),(err)=>
            {
                if(err){
                    console.log(err);
                }       
        }
        )

        })
    }


    static fetchall(callback)
    {const filepath = path.join(__dirname,'..','data','wishes.json');
        fs.readFile(filepath,(err,data)=>
        {
            callback(!err? JSON.parse(data):[]);
        })

    }
}