/**React m import export ka kya matlab hai?
 * => Hum log component bnate hai, component means page ka hissa like
 *    navbar, sidebar, cart, landing page etc. alag alag hm bnate hai
 *    aur baad m sbko jod k ek web application bnate hai. 
 * => Ab dikkat ye aati hai ki har hissa alag alaga component hai aur
 *    components ko alag alag files m rkhte hai, to inko last m jodna
 *    v padta hai aur jodne k liye use hota hai "import & export". 
 * => (a) Navbar - Export
 *    (b) Sidebar - Export
 *    (c) Cart - Export
 *    (d) Main - import { navbar, sidebar, cart }*/ 

function Cart(n) {
    console.log(n*n);
}

export default Cart;