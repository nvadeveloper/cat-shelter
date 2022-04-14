import CardСarousel from "../../components/CardСarousel"


const Boats = () => {

return (
  <section className="container mx-auto px-4 sm:px-6 lg:px-8">
    <p className="my-10 font-bold text-3xl">Катера</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <CardСarousel />
      <CardСarousel />
      <CardСarousel />
      <CardСarousel />
      <CardСarousel />
      <CardСarousel />
    </div>
    
    {/* <a href="" class="block overflow-hidden rounded-2xl">
      <img class="object-cover w-full h-56" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />

      <div class="p-4 bg-gray-900">
        <p class="text-xs text-gray-500">website.com</p>

        <h5 class="text-sm text-white">How to position your furniture for positivity</h5>

        <p class="mt-1 text-xs text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum nobis aliquid accusamus? Sint, sequi voluptas.</p>
      </div>
    </a> */}
  </section>
)}

export default Boats