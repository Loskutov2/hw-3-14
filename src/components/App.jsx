const myName='Yelisey'
const src = 'https://i.dailymail.co.uk/1s/2021/02/23/10/39658340-9290299-Alyson_Kalhagen_from_Green_Bay_was_contacted_after_posting_pictu-m-50_1614077506130.jpg'
const alt = 'cat'
const obj = {
  name:'Telegram',
  url:'https://web.telegram.org'
}
const a=2
const b=2
const colors = [
  "green",
  "yellow",
  "purple",
  "red",
  "violet",
  "orange",
  "black"
]
export const App = () => {
  return (
    <div style={{fontSize:40}}>
      <h1>{myName}</h1>
      <p>Лакаво просимо до нашого сайту</p>
      <img src={src} alt={alt} />
      <a href={obj.url}>{obj.name}</a>
      <p>{a}+{b}={a+b}</p>
      <ul>
        {colors.map((color)=>{
          return <li>{color}</li>
        })}
      </ul>
    </div>
  );
};
