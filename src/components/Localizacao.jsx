import './Localizacao.css';

export default function Localizacao() {
  return (
    <section id="local">
      <div className="wrap local-grid">
        <div>
          <div className="eyebrow reveal">Localização & horários</div>
          <h2 className="reveal" style={{ fontSize: 'clamp(32px,4.5vw,50px)' }}>
            Fácil de chegar,
            <br />
            fácil de ficar.
          </h2>
          <table className="hours-table reveal">
            <tbody>
              <tr>
                <td>Segunda a sexta</td>
                <td>07:00 – 23:00</td>
              </tr>
              <tr>
                <td>Sábado</td>
                <td>07:00 – 23:00</td>
              </tr>
              <tr>
                <td>Domingo</td>
                <td>08:00 – 20:00</td>
              </tr>
            </tbody>
          </table>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=-28.680370,-49.374510&destination_place_id=0x952182511f1126bb:0x82c846d13e64f9cc"
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark reveal"
            style={{ marginTop: 28 }}
          >
            Como chegar
          </a>
        </div>
        <div className="map-box reveal">
          <iframe
            title="Localização da SOLO Arena"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.117641704253!2d-49.37451!3d-28.680370000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952182511f1126bb%3A0x82c846d13e64f9cc!2sRodovi%C3%A1ria%20de%20Crici%C3%BAma!5e1!3m2!1spt-BR!2sbr!4v1786529790394!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
