import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContentCard from '../components/ContentCard';


export default function ShowcasePage() {
  return (
    <div className="min-h-screen flex flex-col bg-yellow-50">
      <Navbar />

      <main className="p-6 flex flex-col md:flex-row gap-8">
        <ContentCard
          title="UI Interactions of the week"
          date="12 Feb 2019"
          tags={['Express', 'Handlebars']}
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint..."
        />

        <ContentCard
          title="Designing Dashboards"
          badge="2020"
          tags={['Dashboard']}
          image="/dashboard.png"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint..."
        />
      </main>

      <Footer />
    </div>
  );
}