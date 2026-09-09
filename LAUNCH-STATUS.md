# CHESPANISH · Preparación del lanzamiento

## Configuración
- Base: USD 14.99 por mes.
- Lanzamiento: 50%, redondeado hacia abajo al centavo: USD 7.49 por mes.
- Duración: 12 meses; máximo: primeros 100 profesores.
- Después: precio estándar vigente en ese momento.
- Precio, porcentaje, duración y máximo editables en /admin y guardados en D1.
- Cobros y contratación desactivados. No hay checkout, suscripciones ni asignación de cupos. Los cupos configurados son el límite de la futura promoción, no un contador de ventas reales.

## Accesos
- Sitio privado para su propietario durante las pruebas.
- Inicio de sesión con ChatGPT, mediante Sites.
- Cuenta propietaria verificada por Sites: acceso total y administración.
- /?vista=profesor muestra las tarjetas y bloqueos de un profesor; no cambia los permisos reales del propietario.
- Muestras fijas: dos selecciones por nivel y dos por categoría. Se usa la unión: una clase puede cubrir ambos grupos y un filtro puede mostrar más de dos gratuitas.
- Las clases, archivos de código privados y escritura de configuración se autorizan en el servidor.
- El proceso de compilación retira del directorio público los módulos exclusivos de clases de pago y los sirve mediante la verificación de propietario. Al añadir nuevas clases o cambiar las muestras, ejecutar npm test y revisar el informe de protección.
- Las imágenes de portada siguen siendo material promocional público; el contenido de las clases bloqueadas no se incluye en el catálogo enviado al navegador.
- La biblioteca para profesores solo muestra clases internas. El propietario conserva el acceso a su laboratorio anterior.

## Marca
Tres láminas generadas con imagegen, 21 personajes con banderas: España, Argentina, México, Colombia, Perú, Chile, Uruguay, Bolivia, Ecuador, Paraguay, Venezuela, Costa Rica, Panamá, Nicaragua, Guatemala, Honduras, El Salvador, Cuba, República Dominicana, Puerto Rico y Guinea Ecuatorial. Son ilustraciones de marca; los escudos están estilizados.

## Validación
npm test compila el producto, crea una base local aislada, aplica las migraciones y prueba las rutas gratuitas/restringidas, archivos privados, administrador, persistencia, conflicto de edición, validación de precios, filtros y contenido inicial. No modifica la base publicada.

Antes de abrir al público: revisión visual y uso real con profesores, prueba del inicio de sesión alojado y posterior integración de pagos en modo de prueba. La futura contratación deberá reservar cupos de forma atómica y conservar el precio, descuento y fecha de finalización de cada alta; los cambios del administrador no deben reescribir contratos existentes. La activación de cobros reales requiere una nueva instrucción del propietario.
