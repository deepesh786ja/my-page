document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const navLinks = document.querySelectorAll('nav ul li a');

    const pages = {
        about: `
            <section id="about">
                <h2>About Me</h2>
                <img src="deepesh.jpg" alt="Deepesh Jaiswal" class="profile-pic">
                <p>
                    <strong>Deepesh Jaiswal</strong><br>
                    AWS/AZURE/GCP DEVOPS<br>
                    Noida<br>
                    <a href="mailto:deepeshiitjaiswal786@gmail.com">deepeshiitjaiswal786@gmail.com</a><br>
                    +91 6260009652<br>
                    <a href="https://in.linkedin.com/in/deepesh-jaiswal-945a90160" target="_blank">LinkedIn</a>
                </p>
                <p>
                    I have 7 years of hands-on experience in automating and architecting mission-critical 24×7 deployments with CI/CD DevOps processes.
                </p>
                <h3>Skills</h3>
                <ul>
                    <li><strong>Cloud Technologies:</strong> AWS, Azure, GCP</li>
                    <li><strong>DevOps Tools:</strong> CI/CD pipelines, Git, Jenkins, AWS Code Pipeline, Bitbucket, AWS CodeBuild</li>
                    <li><strong>Containerization and Orchestration:</strong> Docker, Amazon ECS, Kubernetes, EKS</li>
                    <li><strong>Infrastructure as Code:</strong> AWS CloudFormation, Terraform, AWS CDK</li>
                    <li><strong>Programming:</strong> Python, Bash, PowerShell</li>
                    <li><strong>Databases:</strong> RDS, DynamoDB, Aurora, MySQL, SQL Server, Oracle, PostgreSQL, MongoDB</li>
                    <li><strong>Monitoring and Logging:</strong> AWS CloudWatch, CloudWatch Logs, Prometheus, Grafana, Loki, OpenTelemetry, Tempo</li>
                    <li><strong>Security:</strong> IAM policies, encryption, security groups, AWS CloudTrail, AWS Config, GuardDuty, WAF</li>
                </ul>
            </section>
        `,
        projects: `
            <section id="projects">
                <h2>Projects</h2>
                <h3>Kubernetes Cluster Using EKS</h3>
                <p>Created EKS Cluster with Monitoring dashboard on Grafana.</p>
                <h3>CI/CD Pipeline</h3>
                <p>Designed pipeline for EKS cluster using BitBucket and AWS Codebuild.</p>
                <h3>Jenkins and Monitoring</h3>
                <p>Implemented Jenkins for CI/CD and integrated monitoring using OpenTelemetry, Tempo, Promtail, and CloudWatch.</p>
                <h3>Hyblocapital Security Alerts</h3>
                <p>Designed a high-availability K8s cluster on-premises for a cryptocurrency project. Worked on kubeadm for cluster setup and configuration.</p>
                <h3>SAAS Project on EKS</h3>
                <p>Designed an EKS cluster for multiple clients in a single cluster, including EFS integration. Worked on Terraform modules for production and Ansible playbooks for deployment automation. Used Helm charts on a daily basis.</p>
            </section>
        `,
        experience: `
            <section id="experience">
                <h2>Experience</h2>
                <h3>TietoEVRY | Cloud DevOps Engineer</h3>
                <p>Current | Noida, India</p>
                <ul>
                    <li>Collaborated with development, operations, and quality assurance teams to streamline software delivery processes.</li>
                    <li>Implemented and maintained CI/CD pipelines resulting in automated build, test, and deployment of applications.</li>
                    <li>Configured and managed infrastructure resources in cloud-based environments (Azure, GCP, AWS) and on-premises systems.</li>
                    <li>Developed and integrated central monitoring using Prometheus, Grafana, and Loki. Enabled tracing using Tempo and OpenTelemetry.</li>
                    <li>Deployed docker-based applications on Kubernetes (EKS) reducing deployment time by 70%.</li>
                    <li>Refactored scripts in Shell and Python to operate efficiently on the cloud, reducing runtime by 10% and cloud cost by 5%.</li>
                    <li>Developed highly scalable pipelines using Bitbucket, AWS CodeBuild, and EKS, increasing deployment and testing speed by 80%.</li>
                    <li>Automated the deployment of VPC, Subnet, Security Group, EC2, RDS, EKS using Terraform, reducing manual efforts by 80%.</li>
                    <li>Secured EKS Cluster by integrating Guard Duty and WAF with Ingress.</li>
                    <li>Administered and deployed Kubernetes across dev, UAT, and prod environments.</li>
                    <li>Integrated penetration testing using Trivy scan in CI/CD to test Docker image vulnerabilities, reducing security risk by 40%.</li>
                </ul>
                <h3>Divers Lynx | DevOps Engineer</h3>
                <p>Noida, India</p>
            </section>
        `,
        education: `
            <section id="education">
                <h2>Education</h2>
                <p>
                    <strong>SISTEC Bhopal</strong><br>
                    BE, RGPV University, Bhopal, July 2018
                </p>
            </section>
        `,
        contact: `
            <section id="contact">
                <h2>Contact</h2>
                <form action="mailto:deepeshiitjaiswal786@gmail.com" method="post" enctype="text/plain">
                    <label for="name">Name:</label><br>
                    <input type="text" id="name" name="name"><br>
                    <label for="email">Email:</label><br>
                    <input type="text" id="email" name="email"><br>
                    <label for="message">Message:</label><br>
                    <textarea id="message" name="message"></textarea><br>
                    <input type="submit" value="Send">
                </form>
            </section>
        `
    };

    function loadPage(page) {
        content.innerHTML = pages[page];
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.getAttribute('data-page');
            loadPage(page);
        });
    });

    // Load default page
    loadPage('about');
});
