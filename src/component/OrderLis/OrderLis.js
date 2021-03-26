import ImgBox from '../../assets/images/Image-2.svg'

import './OrderLis.scss'

const OrderLis = ({ imgOrderLis, orderListnName,orderListpriceSenter, orderLisPrice, foodCount }) => {
	return (
		<div className="orderlis-wrapper">
			<div className="orderlis-wrapper-top">

				<div className="orderlis-wrapper-top-left">

					<div className="orderlis-wrapper-top-left-img">
						<img src={imgOrderLis} alt="" className="orderlis-wrapper-top-left-img-item"/>
					</div>
					<div className="orderlis-wrapper-top-left-title">
						<span className="title-top">{orderListnName}</span>
						<span className="title-bottom">{orderListpriceSenter}</span>
					</div>
				</div>

				<div className="orderlis-wrapper-top-right">
					<span className="orderlis-wrapper-top-right-foodCount">{foodCount}</span>
					<span className="orderlis-wrapper-top-right-price">{orderLisPrice}</span>
				</div>
			</div>

			<div className="orderlis-wrapper-bottom">
				<input type="text" className="orderlis-wrapper-bottom-input" placeholder="Order Note..."/>
				<span className="orderlis-wrapper-bottom-delate">
					<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M29.7325 21.2656L29.8153 21.2668C30.1229 21.2922 30.3587 21.5476 30.375 21.855L30.3671 22.0264L30.105 25.2358L29.8301 28.3678C29.7719 28.993 29.7198 29.5204 29.6749 29.9355C29.5187 31.3823 28.5796 32.2769 27.1638 32.3034C24.9578 32.3441 22.8373 32.3437 20.7781 32.2992C19.4033 32.2703 18.4781 31.366 18.3246 29.9414L18.2186 28.8918L18.0333 26.8558L17.8435 24.6217L17.6264 21.9399C17.5995 21.5958 17.8496 21.2944 18.1851 21.2668C18.4927 21.2414 18.7653 21.4548 18.8293 21.7556L18.8543 22.0014L19.058 24.5156L19.2806 27.1215C19.3804 28.2496 19.4669 29.1626 19.5362 29.804C19.6237 30.6158 20.0511 31.0336 20.8034 31.0494C22.8465 31.0936 24.9512 31.094 27.1417 31.0535C27.9398 31.0386 28.374 30.6249 28.4633 29.7978L28.5689 28.7538C28.5998 28.4321 28.6328 28.0769 28.6678 27.691L28.8905 25.1281L29.1588 21.8395C29.1836 21.5241 29.4327 21.2824 29.7325 21.2656ZM17.1095 19.8243C16.7729 19.8243 16.5 19.5444 16.5 19.1993C16.5 18.8828 16.7293 18.6213 17.0268 18.5799L17.1095 18.5742H19.7648C20.0803 18.5742 20.3565 18.366 20.4553 18.066L20.4795 17.9734L20.6859 16.9211C20.8676 16.2241 21.4577 15.7279 22.1492 15.6719L22.2799 15.6666H25.7199C26.4229 15.6666 27.0436 16.1219 27.2826 16.8253L27.3228 16.96L27.5203 17.9732C27.5822 18.2906 27.8354 18.5276 28.1417 18.5681L28.2351 18.5742H30.8905C31.2271 18.5742 31.5 18.8541 31.5 19.1993C31.5 19.5157 31.2707 19.7772 30.9732 19.8186L30.8905 19.8243H17.1095ZM25.7199 16.9167H22.2799C22.1089 16.9167 21.9569 17.0193 21.8938 17.1483L21.8724 17.205L21.6748 18.2186C21.6507 18.3423 21.6157 18.4615 21.5709 18.5751L26.429 18.5752C26.4011 18.5043 26.377 18.4313 26.3569 18.3564L26.325 18.2184L26.1364 17.244C26.0923 17.0749 25.9561 16.9511 25.7918 16.9228L25.7199 16.9167Z" fill="#FF7CA3" />
						<path d="M8 1H40V-1H8V1ZM47 8V40H49V8H47ZM40 47H8V49H40V47ZM1 40V8H-1V40H1ZM8 47C4.13401 47 1 43.866 1 40H-1C-1 44.9706 3.02944 49 8 49V47ZM47 40C47 43.866 43.866 47 40 47V49C44.9706 49 49 44.9706 49 40H47ZM40 1C43.866 1 47 4.13401 47 8H49C49 3.02944 44.9706 -1 40 -1V1ZM8 -1C3.02944 -1 -1 3.02944 -1 8H1C1 4.13401 4.13401 1 8 1V-1Z" fill="#FF7CA3" />
					</svg>
				</span>
			</div>
		</div>
	)
}

export default OrderLis


OrderLis.defaultProps = {
	imgOrderLis: ImgBox,
	orderListnName: 'Spicy seasoned sea...',
	orderListpriceSenter: '$ 2.69',
	foodCount: 4,
	orderLisPrice: '$ 4,58',
}