import { Partner, Service } from "@prisma/client";
import Link from "next/link";
import { api } from "~/utils/api";

export const Footer: React.FC = () => {
    const partnerQuery = api.partner.getAll.useQuery({
        limit: 10
    });
    const partners = partnerQuery.data?.items;

    const serviceQuery = api.service.getAll.useQuery({
        limit: 10
    });
    const services = serviceQuery.data?.items;

    return (
        <footer className="p-18 bg-slate-800">
            <div className="container mx-auto flex flex-wrap text-center">
                <div className="footer-section">
                    <div>
                        <h3 className="footer-title">Links</h3>
                        <ul className="list-none">
                            <li className="footer-link"><Link href="/">Home</Link></li>
                            <li className="footer-link"><Link href="/service">Services</Link></li>
                            <li className="footer-link"><Link href="/blog">Blog</Link></li>
                            <li className="footer-link"><Link href="/about">About Us</Link></li>
                            <li className="footer-link"><Link href="/request">My Requests</Link></li>
                            <li className="footer-link"><Link href="/request/new">New Request</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-section">
                    <div>
                        <h3 className="footer-title">Services</h3>
                        <ul className="list-none">
                            {services && (
                                <>
                                    {services.map((service: Service) => {
                                        const viewLink = "/service/view/" + service.url;

                                        return (
                                            <li key={"footer-service-" + service} className="footer-link"><Link href={viewLink}>{service.name}</Link></li> 
                                        );   
                                    })}
      
                                </>
      
                            )}
                        </ul>
                    </div>
                </div>
                <div className="footer-section">
                    <div>
                        <h3 className="footer-title">Partners</h3>
                        <ul className="list-none">
                            {partners && (
                                <>
                                    {partners.map((partner: Partner) => {
                                        return (
                                            <li key={"footer-partner-" + partner.id} className="footer-link"><a href={partner.url} target="_blank">{partner.name}</a></li>
                                        );
                                    })}
                                </>
                            )}
            
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}