export default `
<meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
<table border="0" cellpadding="0" style="table-layout:auto;margin-top:40px;" >
    <tbody>
        <tr>
            <td style="width:170px;">
                <img src="https://grupolamusa.com/firma/2019/shared/grupo-la-musa-img-izq-firma.jpg" width="170" height="163" alt="Grupo La Musa" title="Grupo La Musa">
            </td>
            <td style="width:10px;"></td>
            <td style="vertical-align:top;">
                <p style="-webkit-margin-before:0;-webkit-margin-after:0;font-family:Lucida Sans, Arial, sans-serif;font-size:14px;color:#473741;letter-spacing:1;margin: 12px 0 0 0;"><strong>{{ person.name }}</strong></p>
                <p style="-webkit-margin-before:0;-webkit-margin-after:0;font-family:Lucida Sans, Arial, sans-serif;font-size:14px;color:#473741;letter-spacing:1;margin:0;">{{ person.role }}</p>
                <a href="mailto:person.email" style="text-decoration:none;word-break:keep-all;">
                    <p style="-webkit-margin-before:0;-webkit-margin-after:0;font-family:Lucida Sans, Arial, sans-serif;font-size:12px;color:#473741;letter-spacing:1;margin:0;word-break:keep-all;white-space:nowrap;">{{ person.email}}</p>
                </a>
                <a href="https://grupolamusa.com" style="text-decoration:none;">
                    <p style="-webkit-margin-before:0;-webkit-margin-after:0;font-family:Lucida Sans, Arial, sans-serif;font-size:12px;color:#473741;letter-spacing:1;margin:0;">www.grupolamusa.com</p>
                </a>
                <a v-if="person.fb" :href="person.fb" style="text-decoration:none;"><img src="https://grupolamusa.com/firma/2019/shared/grupo-la-musa-fb.jpg" alt="Facebook" width="25" height="25" style="margin:5px 0 0 0;"></a>
                <a v-if="person.ig" :href="person.ig" style="text-decoration:none;"><img src="https://grupolamusa.com/firma/2019/shared/grupo-la-musa-ig.jpg" alt="Instagram" width="25" height="25" style="margin:5px 0 0 5px;"></a>
                <a v-if="person.tw" :href="person.tw" style="text-decoration:none;"><img src="https://grupolamusa.com/firma/2019/shared/grupo-la-musa-tw.jpg" alt="Twitter" width="25" height="25" style="margin:5px 0 0 5px;"></a>
                <br/>
                <a href="https://grupolamusa.com" style="text-decoration:none;"><img src="https://grupolamusa.com/firma/2019/shared/grupo-la-musa-logo-firma.jpg" alt="Logo Grupo La Musa" width="175" height="46" style="margin:5px 0 0 0;"></a>
            </td>
        </tr>
        <tr>
            <td style="height:25px;" colspan="3"></td>
        </tr>
        <tr>
            <td style="vertical-align:top;" colspan="3" width="420">
                <p style="text-align:justify;-webkit-margin-before:0;-webkit-margin-after:0;font-size:7px;font-family:Lucida Fax, Georgia, serif;font-weight:normal;margin:0;color:#473741">
                    <strong>AVISO LEGAL</strong>: Este mensaje y sus archivos adjuntos van dirigidos exclusivamente a su destinatario, pudiendo contener información confidencial sometida a secreto profesional. No está permitida su comunicación, reproducción o distribución sin la autorización expresa de {{person.company}}. Si usted no es el destinatario final, por favor elimínelo e infórmenos por esta vía.
                </p>
                <p style="text-align:justify;-webkit-margin-before:0;-webkit-margin-after:0;font-size:7px;font-family:Lucida Fax, Georgia, serif;font-weight:normal;margin:6px 0 0;color:#473741">
                    <strong>PROTECCIÓN DE DATOS</strong>: De conformidad con lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril de 2016 (GDPR), y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), le informamos que los datos personales y dirección de correo electrónico, recabados del propio interesado o de fuentes públicas, serán tratados bajo la responsabilidad de {{ person.company }} para el envío de comunicaciones ordinarias vinculadas a nuestros productos y/o servicios y se conservarán mientras exista un interés mutuo para ello. Los datos no serán comunicados a terceros, salvo obligación legal. Le informamos que puede ejercer los derechos de acceso, rectificación, portabilidad y supresión de sus datos y los de limitación y oposición a su tratamiento dirigiéndose a C/ Manuela Malasaña, 18 - 28004 Madrid (Madrid). Email: <a href="maito:protecciondatos@grupolamusa.com">protecciondatos@grupolamusa.com</a>. Si considera que el tratamiento no se ajusta a la normativa vigente, podrá presentar una reclamación ante la autoridad de control en <a href="www.agpd.es">www.agpd.es</a>.
                </p>
            </td>
        </tr>
    </tbody>
</table>
`
