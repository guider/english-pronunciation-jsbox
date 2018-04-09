function sayHello() {
    var text = $clipboard.text;
    if (!text || text.length > 10) {
        $input.text({
            handler: function(inputText) {
                doRequest(inputText)
            }
        })
        return;
    }
    doRequest(text)
    $clipboard.clear()
}

function doRequest(text) {
    /*
    *   1. 习惯说明：
        所有api中，除部分特别说明，%s 直接替换为单词

        2. 有道词典单词发音：
        http://dict.youdao.com/dictvoice?audio=%s

        3. 有道词典获取释义（支持单词和句子翻译）：
        http://fanyi.youdao.com/openapi.do?keyfrom=appname&key=key&type=data&doctype=json&version=1.2&q=%s 
        需要申请key，直通车，文档说明api版本为1.1，实际可支持1.2，返回可选xml、json、jsonp，带读音、不带例句

        4. 金山词霸api：
        http://dict-co.iciba.com/api/dictionary.php?w=%s&key=key 
        需要申请key，直通车，仅返回xml格式，带例句。

        5. 扇贝单词发音：
        1. 美式：http://media.shanbay.com/audio/us/%s.mp3
        2. 英式：http://media.shanbay.com/audio/uk/%s.mp3
    */
    var source = "https://media.shanbay.com/audio/us/" + text + ".mp3";

    $audio.play({
        url: source
    })



}


module.exports = {
    sayHello: sayHello
}
