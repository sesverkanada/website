<?php
$mysqli = new mysqli("localhost", "lfltvc16_user", "goMjK02NWyqN", "lfltvc16_sesver");
$mysqli->set_charset("utf8mb4");


?>

<!DOCTYPE HTML>
<html>
	<head>
		<title>Sesver Kanada - Admin Panel</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js" integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.min.js" integrity="sha384-7qAoOXltbVP82dhxHAUje59V5r2YsVfBafyUDxEdApLPmcdhBPg1DKg1ERo0BZlK" crossorigin="anonymous"></script>

	</head>
	<body >

		<div class="p-5">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Email</th>
      <th scope="col">Statü</th>
      <th scope="col">Bulunma Süresi</th>
      <th scope="col">Yaş</th>
      <th scope="col">Cinsiyet</th>
      <th scope="col">Diller</th>
      <th scope="col">Eğitim</th>
      <th scope="col">Kanada Eğitim</th>
      <th scope="col">Çalışma</th>
      <th scope="col">Meslek</th>
      <th scope="col">Şehir</th>
      <th scope="col">Medini Hal</th>
      <th scope="col">Çocuk</th>
      <th scope="col">Aktif Organization</th>
      <th scope="col">Gönüllü</th>
      <th scope="col">Gönüllü Detay</th>
      <th scope="col">Sponsor</th>
      <th scope="col">Beklenti</th>
      <th scope="col">Yorum</th>
      <th scope="col">İletişim İzni</th>
      <th scope="col">Tarih</th>
    </tr>
  </thead>
  <tbody>
    <?php 
    
    $sql = "SELECT * FROM records ORDER BY id DESC";
    $result = $mysqli->query($sql);
    $index = 1; 
    while ($row = $result->fetch_assoc()) {


    ?>
    <tr>
      <th scope="row"><?php echo $index++; ?></th>
      <td><?php echo $row['email']; ?></td>
      <td><?php echo $row['statu']; ?></td>
      <td><?php echo $row['sure']; ?></td>
      <td><?php echo $row['age']; ?></td>
      <td><?php echo $row['gender']; ?></td>
      <td><?php echo $row['languages']; ?></td>
      <td><?php echo $row['educations']; ?></td>
      <td><?php echo $row['canada_edus']; ?></td>
      <td><?php echo $row['work']; ?></td>
      <td><?php echo $row['occupation']; ?></td>
      <td><?php echo $row['city']; ?></td>
      <td><?php echo $row['marital']; ?></td>
      <td><?php echo $row['child']; ?></td>
      <td><?php echo $row['organization']; ?></td>
      <td><?php echo $row['volunteer']; ?></td>
      <td><?php echo $row['volunteer_details']; ?></td>
      <td><?php echo $row['sponsor']; ?></td>
      <td><?php echo $row['expectation']; ?></td>
      <td><?php echo $row['comment']; ?></td>
      <td><?php echo $row['get_email']; ?></td>
      <td><?php echo date('m/d/Y', $row['tarih']);  ?></td>
      
    </tr>
    <?php }?>
    
  </tbody>
</table>
        </div>

	</body>
</html>