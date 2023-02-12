module.exports = function toReadable (number) {
    const one = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const hun = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
    
    console.log(one[number[0] -1])
    if(number <= 19){
        if (number == 0){
            return 'zero'
        }
        else{
        return one[number -1]
        }
    }
    else if(number > 19 && number < 100){
        let fir = Number((number.toString()).slice(0,1))
        let sec = Number((number.toString()).slice(1))
        return (hun[fir - 2] + ' ' + one[sec - 1]).replace(/undefined/g, '').trim()
    }
    else if(number >= 100){
        let fir = Number((number.toString()).slice(0,1))
        let result = one[fir - 1] + ' hundred '
        let slc = (number.toString()).slice(1,3)
        if (slc <= 19){
            slc = Number(slc)
            return (result + one[slc -1]).replace(/undefined/g, '').trim()
        }
        else if (slc > 19 && slc < 100){
            return ((result + (hun[slc[0] - 2] + ' ' + one[slc[1] - 1])).replace(/undefined/g, '')).trim()
        }
    }
    }