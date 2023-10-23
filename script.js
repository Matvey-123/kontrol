let obj = {"surname":"Михеева","name":"Татьяна","patronymic":"Александровна","ocupation":"Преподаватель специальных дисциплин","degree":"Высшее","education":"Московский государственный институт электронной техники (технический университет)","qualification":"Инженер-программист инфокоммуникационных систем", "specialty": "Программное обеспечение радиоэлектронных систем","discipline":["Основы алгоритмизации и программирования"," Компьютерная графика"],"category":"Первая", "expirience ":"13", "email":"pechora-proger@mail.ru", "site":"pechora-proger.ru"};
	let line =`
	        <img src='no-image.jpg'>
			<p class='z1'>${obj.surname} ${obj.name} ${obj.patronymic}</p>
			<p class='z2'>${obj.ocupation} </p>
			<p class='z3'>Основная информация</p>
			<p><i>Уровень образования: </i>${obj.degree} </p>
			<p><i>Образование: </i>${obj.education} </p>
			<p><i>Квалификация: </i>${obj.qualification} </p>
			<p><i>Специализация:</i> ${obj.specialty} </p>
			<p><i>Преподоваемые дисциплины: </i><ul><li>${obj.discipline[0]}</li><li>${obj.discipline[1]}</li></ul></p>
			<p class='z3'>Дополнительная информация: </p>
		`
		obj.category = prompt("введите категорию");
        obj.experience = prompt("введите стаж");
        obj.email = prompt("введите email");
        obj.site = prompt("введите персональный сайт");