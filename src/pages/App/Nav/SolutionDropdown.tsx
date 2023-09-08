import Link from '../../../components/Link';
import Paper from '../../../components/Paper';

const SolutionDropdown = () => {
  return (
    <Paper width={300}>
      <div className="px-6 w-full">
        <div className="border-b border-gray-100 pb-6 mb-4">
          <h1 className="text-base font-semibold leading-6">For</h1>
          <ul>
            <Link href="/" secondary="Enterprise" tight />
            <Link href="/" secondary="Teams" tight />
            <Link href="/" secondary="Startups" tight />
            <Link href="/" secondary="Education" tight external />
          </ul>
        </div>
        <div className="border-b border-gray-300 pb-6 mb-4">
          <h1 className="text-base font-semibold leading-6">By Solution</h1>
          <ul>
            <Link href="/" secondary="CI/CD & Automation" tight />
            <Link href="/" secondary="DevOps" tight external />
            <Link href="/" secondary="DevSecOps" tight external />
          </ul>
        </div>
        <div>
          <h1 className="text-base font-semibold leading-6">Resources</h1>
          <ul>
            <Link href="/" secondary="Customer Stories" tight />
            <Link href="/" secondary="White papers, Ebooks, Webinars" tight external />
            <Link href="/" secondary="Partners" tight external />
          </ul>
        </div>
      </div>
    </Paper>
  );
};

export default SolutionDropdown;
