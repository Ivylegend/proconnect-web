
export default function BaseContainer({title, subtitle, points, imageSrc, imageAlt}) {
  return (
    <section className="bg-white px-4 py-8">
        <div className="max-w-7xl mx-auto">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <ul>
            {
                points.map((point, index) =>(
                   <li></li> 
                ))
            }
        </ul>
        </div>
    </section>
  )
}
