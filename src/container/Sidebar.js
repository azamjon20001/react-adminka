import {useState} from 'react' ; 
import { Link } from 'react-router-dom'
import { 
	Home,Descount,Graph,Mail,Notificetion,Settings,LogOut } from '../assets/icons/icon'
import SidebarButton from '../component/SidebarButton/SidebarButton'
import './container.scss'


const Sidebar = () => {
	const [ sidebarState , setSidebarState] = useState(false)
	const btn = document.querySelectorAll('.sidebar-button')
	const path = window.location.pathname

	console.log(window.location.pathname)

	window.onbeforeunload = () => {
		btn.forEach(element => {
			if (element.dataset.path = path) {
				element.classList.add('active')
			}
		});
	}

	return (
		<div className="sidebar-wrapper">
			<Link to={`/`} className="sidebar-wrapper-top">
				<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect opacity="0.26" width="56" height="56" rx="12" fill="#EB966A" />
					<path d="M39.6667 11.3334H16.3334C13.5767 11.3334 11.3334 13.5767 11.3334 16.3334V21.0517C11.3334 22.8067 11.97 24.4017 13 25.6284V41.3334C13 41.7754 13.1756 42.1993 13.4882 42.5119C13.8008 42.8244 14.2247 43 14.6667 43H28C28.4421 43 28.866 42.8244 29.1786 42.5119C29.4911 42.1993 29.6667 41.7754 29.6667 41.3334V33H36.3334V41.3334C36.3334 41.7754 36.509 42.1993 36.8215 42.5119C37.1341 42.8244 37.558 43 38 43H41.3334C41.7754 43 42.1993 42.8244 42.5119 42.5119C42.8244 42.1993 43 41.7754 43 41.3334V25.6267C44.03 24.4017 44.6667 22.8067 44.6667 21.05V16.3334C44.6667 13.5767 42.4234 11.3334 39.6667 11.3334ZM41.3334 16.3334V21.0517C41.3334 22.9517 39.9184 24.5717 38.1817 24.6634L38 24.6667C36.1617 24.6667 34.6667 23.1717 34.6667 21.3334V14.6667H39.6667C40.5867 14.6667 41.3334 15.415 41.3334 16.3334ZM24.6667 21.3334V14.6667H31.3334V21.3334C31.3334 23.1717 29.8384 24.6667 28 24.6667C26.1617 24.6667 24.6667 23.1717 24.6667 21.3334ZM14.6667 16.3334C14.6667 15.415 15.4134 14.6667 16.3334 14.6667H21.3334V21.3334C21.3334 23.1717 19.8384 24.6667 18 24.6667L17.8184 24.6617C16.0817 24.5717 14.6667 22.9517 14.6667 21.0517V16.3334ZM24.6667 34.6667H18V29.6667H24.6667V34.6667Z" fill="url(#paint0_linear)" />
					<defs>
						<linearGradient id="paint0_linear" x1="28" y1="11.3334" x2="28" y2="43" gradientUnits="userSpaceOnUse">
							<stop stop-color="#EA9769" />
							<stop offset="1" stop-color="#EA6969" />
						</linearGradient>
					</defs>
				</svg>
			</Link>

			<div className="sidebar-wrapper-bottom">
				<Link to={`/`} className="sidebar-wrapper-bottom-link">

					<SidebarButton
						ButtonIcon={<Home/>}
						dataSet="/"
						sidebarState={sidebarState}
						setSidebarState={setSidebarState}
						homeActve={'active'}
					/>

				</Link>
				<Link to={`/Discount`} className="sidebar-wrapper-bottom-link">

					<SidebarButton
						ButtonIcon={<Descount/>}
						dataSet="/Discount"
						sidebarState={sidebarState}
						setSidebarState={setSidebarState}
					/>

				</Link>

				<Link to={`/Graph`} className="sidebar-wrapper-bottom-link">

					<SidebarButton
						ButtonIcon={<Graph/>}
						dataSet="/Graph"
						sidebarState={sidebarState}
						setSidebarState={setSidebarState}
					/>


				</Link>

				<Link to={`/Message`} className="sidebar-wrapper-bottom-link">

					<SidebarButton
						ButtonIcon={<Mail/>}
						dataSet="/Message"
					/>

				</Link>

				<Link to={`/Notificetionv`} className="sidebar-wrapper-bottom-link">

					<SidebarButton
						ButtonIcon={<Notificetion/>}
						dataSet="/Notificetionv`"
					/>

				</Link>

				<Link to={`/Settings`} className="sidebar-wrapper-bottom-link">

					<SidebarButton
						ButtonIcon={<Settings/>}
						dataSet="/Settings"
					/>

				</Link>

				<Link to={`/LogOut`} className="sidebar-wrapper-bottom-link">

					<SidebarButton
						ButtonIcon={<LogOut/>}
						dataSet="/LogOut"
					/>

				</Link>
			</div>
		</div>
	)
}


export default Sidebar