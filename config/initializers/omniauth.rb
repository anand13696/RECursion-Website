Rails.application.config.middleware.use OmniAuth::Builder do 
	provider :facebook, '182384698969016', '8d183461584b162886fe1cdee0125a5c', image_size: 'large'
	provider :github, '217a1c7a7423b24816a2', '7e1d219e4f555efd32ff631b4de5ffb1d12a4884'
	OmniAuth.config.logger = Rails.logger
	provider :google_oauth2, '587144852609-oqfflmk4i0fdtl04944ccq3n6u981okf.apps.googleusercontent.com', 'oZ3MIBVrhG-070yVUcsbn84O', {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end