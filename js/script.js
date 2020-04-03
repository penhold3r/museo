const domReady = callback => {
	document.readyState === 'interactive' || document.readyState === 'complete'
		? callback()
		: document.addEventListener('DOMContentLoaded', callback)
}

domReady(() => {
	const hotspots = [
		{
			id: 'image-arts',
			position: {
				pitch: 6, // In degrees. Up is positive.
				yaw: -73, // In degrees. To the right is positive.
				radius: 0.05, // Radius of the circular target in meters.
				distance: 3 // Distance of target from camera in meters.
			},
			title: 'Image Arts',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ipsa!'
		},
		{
			id: 'carrousel',
			position: {
				pitch: 10, // In degrees. Up is positive.
				yaw: 0, // In degrees. To the right is positive.
				radius: 0.05, // Radius of the circular target in meters.
				distance: 3 // Distance of target from camera in meters.
			},
			title: 'Carrousel',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ipsa!'
		},
		{
			id: 'vitality',
			position: {
				pitch: 6, // In degrees. Up is positive.
				yaw: 60, // In degrees. To the right is positive.
				radius: 0.05, // Radius of the circular target in meters.
				distance: 3 // Distance of target from camera in meters.
			},
			title: 'Vitality',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ipsa!'
		},
		{
			id: 'gadgetronics',
			position: {
				pitch: -15, // In degrees. Up is positive.
				yaw: 125, // In degrees. To the right is positive.
				radius: 0.05, // Radius of the circular target in meters.
				distance: 3 // Distance of target from camera in meters.
			},
			title: 'Gadgetronics',
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ipsa!'
		}
	]
	const vrView = new VRView.Player('#vrview', {
		image: 'https://cors-anywhere.herokuapp.com/https://museo.netlify.com/images/pier.jpg',
		is_stereo: false,
		width: '100%',
		height: '100%'
	})

	vrView.on('ready', () => {
		console.log('ready')

		hotspots.forEach(hotspot => {
			vrView.addHotspot(hotspot.id, hotspot.position)
		})
	})

	vrView.on('click', e => modalData(e.id, hotspots))
})

const modalData = (id, hotspots) => {
	const modal = document.querySelector('.modal')
	const hotspot = hotspots.find(hotspot => hotspot.id === id)

	console.log(id)

	if (hotspot) {
		modal.classList.toggle('visible')
		modal.querySelector('.title').innerText = hotspot.title
		modal.querySelector('.desc').innerText = hotspot.desc
	}
}
