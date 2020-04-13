    //对象转换key,keyMap示例{'id':'value','name':'label'},将id,name替换成value,和label
    const convertKey = (arr, keyMap) => {
            let tempString = JSON.stringify(arr);
            for (var key in keyMap) {
                var reg = `/"${key}":/g`;
                tempString = tempString.replace(eval(reg), '"' + keyMap[key] + '":');
            }
            return JSON.parse(tempString);
        }
        //转换时分秒
    const cduration = (msd) => {
            let time = Math.floor(msd / 1000);
            //   console.log(time);
            let s = time % 60;
            //   console.log(s);
            let m = Math.floor(time / 60);
            //   console.log(m);
            return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
        }
        //转换日期
    const dateFormat = (originVal) => {
        const dt = new Date(originVal)

        const y = dt.getFullYear()
        const m = (dt.getMonth() + 1 + '').padStart(2, '0')
        const d = (dt.getDate() + '').padStart(2, '0')

        const hh = (dt.getHours() + '').padStart(2, '0')
        const mm = (dt.getMinutes() + '').padStart(2, '0')
        const ss = (dt.getSeconds() + '').padStart(2, '0')

        return `${y}-${m}-${d}`
    }

    export { convertKey, cduration, dateFormat }