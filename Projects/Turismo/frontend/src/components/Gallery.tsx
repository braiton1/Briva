function Gallery({images}:{images:string[]}){return <section className="gallery shell"><div className="gallery__large"><img src={images[0]} alt="Interior de Casa Jarilla"/></div><div><img src={images[1]} alt="Deck con vista a la montaña"/></div><div><img src={images[2]} alt="Exterior de Casa Jarilla"/></div></section>}
export default Gallery
