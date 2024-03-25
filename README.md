# Home Lab Configuration

## Overview

This repository contains the configuration for my home lab. The lab is built on a single server running Ubuntu server 22.04. The server is an old Pc that I had laying around. This project is a comprehensive guide to setting up a home lab for learning and testing purposes leveraging Docker and Docker Compose for service orchestration. It includes a variety of services such as a reverse proxy, a VPN, a password manager, a media server, and more.

## Project Structure

The project is organized into several directories, each containing a Docker Compose file and configuration files for different services.

### Services

- [**Media Server**](./media_stack/README.md): A media server that includes services for downloading, organizing, and streaming media. **NB:** This service is still under development.
- [**Home Page**](./homepage/README.md): A simple home page that serves as a landing page for the lab.
- [**Reverse Proxy**](./nginx/README.md): A reverse proxy that routes traffic to different services based on the domain name.
- [**DNS**](./pihole/README.md): A DNS server that blocks ads and trackers. It also has a recursive DNS resolver [**unbound**](https://nlnetlabs.nl/projects/unbound) for a fully functional DNS server that can resolve any domain.

### Configuration

Each service has its own configuration files and environment variables. The configuration files are stored in the respective service directories. These configiles are used to customize the behaviour of the services.

### Docker Compose

Each service has a `docker-compose.yml` file that defines the services and their configurations. The `docker-compose.yml` files are stored in the respective service directories. # Project Title: Home Lab Configuration

This project is a comprehensive configuration for a home lab setup, leveraging Docker and Docker Compose for service orchestration. It includes a variety of services such as media servers, cloud storage, DNS management, and more.

## Project Structure

The project is organized into several directories, each containing Docker Compose files and configuration files for different services:

- [`media_stack/`](command:_github.copilot.openRelativePath?%5B%22media_stack%2F%22%5D "media_stack/"): Contains the Docker Compose file for the Media Stack service, which includes services like Plex, Sonarr, Radarr, and more.
- [`nextcloud/`](command:_github.copilot.openRelativePath?%5B%22nextcloud%2F%22%5D "nextcloud/"): Contains the Docker Compose file for the Nextcloud service, a self-hosted cloud storage solution.
- [`nginx/`](command:_github.copilot.openRelativePath?%5B%22nginx%2F%22%5D "nginx/"): Contains the Docker Compose file for the Nginx service, which acts as a reverse proxy for other services.
- [`pihole/`](command:_github.copilot.openRelativePath?%5B%22pihole%2F%22%5D "pihole/"): Contains the Docker Compose file for the Pi-hole service, a network-wide ad blocker.

## Configuration

Each service has its own configuration files located in its respective directory. These configuration files are used to customize the behavior of the services, such as setting up network settings, storage paths, and more.

## Docker Compose

Each directory contains a `docker-compose.yml` file that defines the Docker services for that part of the home lab. These files specify the Docker images to use, environment variables, ports, volumes, and networks.

## Getting Started

To get started with the home lab, follow the instructions in the README files of the respective services. Each service has its own setup instructions and configuration options. After that you can start the services using Docker Compose with the following command:

```bash
docker compose up -d
```
## License

This project is licensed under the MIT License. See the [`LICENSE`](./LICENSE) file for details.



