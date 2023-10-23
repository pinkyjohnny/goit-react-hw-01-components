import css from './Statistics.module.css'
const backgroundColor = document.querySelector('[listitem]')
console.log(backgroundColor);


export const Statistics = ({ title = "Upload stats", data }) => {
    return <div>
<section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>

    <ul className={css.statlist}>
                {data.map(({ id, label, percentage }) => (
                  <li className={css.listitem} key={id}>
   <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
        ) )}        
  </ul>
    </section>
    </div>
    
    
}