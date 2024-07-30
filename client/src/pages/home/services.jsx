import { services } from "../../constants/services";

const Services = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {services.map((service, index) => (
        <div key={index} className="flex items-center text-center gap-5 flex-col border border-slate-100 rounded-md px-10 py-8">
          <service.icon className="size-14 stroke-[.8px] text-primary" />

          <div>
            <h3 className="text-lg font-medium text-gray-700">
              {service.title}
            </h3>
            <p className="text-gray-500 font-light mt-2">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
