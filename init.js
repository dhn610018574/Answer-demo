
// var init = {
//     'questions': [
//         {
//             'question': 'Ո՞ր դեպքերում առաջին դասարանի սովորողը կարող է կրկնել տվյալ ուսումնական տարվա դասընթացը:',
//             'answers': ['Ուսումնական հաստատության տնօրենի ու դասվարի որոշմամբ և ծնողի (նրա օրինական ներկայացուցչի համաձայնությամբ',
//                 'Ծնողի (նրա օրինական ներկայացուցչի) գրավոր դիմումի և Հաստատության մանկավարժական խորհրդի  պահանջով',
//                 'Ծնողի (նրա օրինական ներկայացուցչի) գրավոր դիմումի և Հաստատության մանկավարժական խորհրդի որոշմամբ:',
//                 "Ծնողի (նրա օրինական ներկայացուցչի) խնդրանքով և Հաստատության մանկավարժական խորհրդի որոշմամբ:"],
//             'correctAnswer': 3
//         },
//         {
//             'question': 'The C in CSS stands for?',
//             'answers': ['Controlled', 'Color', 'Cascading', 'Consistent'],
//             'correctAnswer': 3
//         },

//         {
//             'question': 'What is the correct HTML for creating a hyperlink?',
//             'answers': ['&lt;a name="http://www.w3schools.com">W3Schools.com&lt;/a>', '&lt;a href="http://www.w3schools.com">W3Schools&lt;/a>', '&lt;a url="http://www.w3schools.com">W3Schools.com</a>', '&lt;a>http://www.w3schools.com&lt;/a>'],
//             'correctAnswer': 2
//         },

//         {
//             'question': 'What is the total width of this container? (think box-model) <br>#container {width: 100px; padding: 20px 10px;}',
//             'answers': ['100', '110', '120', '140px'],
//             'correctAnswer': 3
//         },
//         {
//             'question': 'Which of the following is used to display links without an underline?',
//             'answers': ['{text-decoration:no underline}', '{text-decoration:none}', '{font-style:underlined 0}', '{hyperlink:no underline}'],
//             'correctAnswer': 2
//         },
//         {
//             'question': 'What is the correct HTML tag for the most important heading?',
//             'answers': ['head', 'h6', 'largehead', 'h1'],
//             'correctAnswer': 4
//         },


//         {
//             'question': 'How do you center an element horizontally?',
//             'answers': ['margin: 0 auto;', 'align: center;', 'center: true;', 'float: 50%'],
//             'correctAnswer': 1
//         },


//         {
//             'question': 'Which element is an unordered list?',
//             'answers': ['&lt;list>', '&lt;oul>', '&lt;ol>', '&lt;ul>'],
//             'correctAnswer': 4
//         },

//         {
//             'question': 'The # symbol specifies that the selector is...',
//             'answers': ['class', 'element', 'tag', 'id'],
//             'correctAnswer': 4
//         },
//         {
//             'question': 'What is the correct HTML for inserting an image?',
//             'answers': ['&lt;img href="image.gif" alt="MyImage" />', '&lt;img alt="MyImage">image.gif</img>', '&lt;image src="image.gif" alt="MyImage" />', '&lt;img src="image.gif" alt="MyImage" />'],
//             'correctAnswer': 4
//         },
//         {
//             'question': '<code>#id {margin: 20px 30px 10px 50px}</code><br><br> The margin-right value will be?',
//             'answers': ['10px', '20px', '50px', '30px'],
//             'correctAnswer': 4
//         },
//         {
//             'question': 'Which property is used to change the size of text?',
//             'answers': ['size', 'type', 'font-size', 'type-size'],
//             'correctAnswer': 3
//         }

//     ],
//     'resultComments':
//     {
//         perfect: 'Wow. Perfect!',
//         excellent: 'Outstanding!',
//         good: 'Exceeds expectations!',
//         average: 'Acceptable.',
//         bad: 'Keep at it!',
//         poor: 'Keep at it!',
//         worst: 'Keep at it!'
//     }

// };

var init = {
    'questions': [
        { 'question': '1. 您的年龄是？', 'answers': ['A. 20-40岁', 'B.40-60岁', 'C.60岁以上'], 'correctAnswer': 1 },
        { 'question': '2. 您的家庭收入？', 'answers': ['A.50万元以上', 'B.10-50万元', 'C.10万元以下'], 'correctAnswer': 3 },
        { 'question': '3. 您的日常支出约占正常收入的？', 'answers': ['A. 35%以下', '35%-70%', 'C.70%以上'], 'correctAnswer': 1 },
        { 'question': '4. 未来3年内您预期您的家庭收入将？', 'answers': ['A. 不断增加', 'B.保持稳定', 'C.逐渐减少'], 'correctAnswer': 1 },
        { 'question': '5. 您在投资领域的经验？', 'answers': ['A. 做过信托、期货、股权投资', 'B.之前投资过p2p、股票、基金', 'C.买过银行保本理财产品，或者无任何投资经验'], 'correctAnswer': 1 },
        { 'question': '6. 您有多少年投资领域经验？', 'answers': ['A. 3年以上', 'B.1-3年', 'C.没有经验'], 'correctAnswer': 1 },
        { 'question': '7. 您在信而富的投资占个人总资产的？', 'answers': ['A. 低于10%', 'B.10-50%', 'C.高于50%'], 'correctAnswer': 1 },
        { 'question': '8. 您通过信而富平台出借期望获得的投资收益是？', 'answers': ['A. 6%-15%，可承受一定风险', 'B.6%左右，要求相对风险低', 'C.高于同期定期存款就可以'], 'correctAnswer': 1 },
        { 'question': '9. 下哪项描述最符合您的投资态度？', 'answers': ['A. 寻求较高收益和成长性，愿意承担有限的本金损失', 'B.保守投资，不希望本金损失，愿意承担一定幅度的收益波动', 'C.厌恶风险，不希望本金损失，希望获得稳定回报'], 'correctAnswer': 1 },
        { 'question': '10. 您是否有过投资失败的经历？如有，遭受的损失是多少？', 'answers': ['A. 曾经有过，损失30%以上', 'B.曾经有过，损失5%-30%', 'C.曾经有过，损失5%以下；或无投资失败经历'], 'correctAnswer': 1 }
    ],
    'resultComments':
    {
        perfect: 'Wow. Perfect!',
        excellent: 'Outstanding!',
        good: 'Exceeds expectations!',
        average: 'Acceptable.',
        bad: 'Keep at it!',
        poor: 'Keep at it!',
        worst: 'Keep at it!'
    }
};
