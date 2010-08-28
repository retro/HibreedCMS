class HibreedSubdomain  
  def self.matches?(request)  
    request.subdomain.present? && request.subdomain.split('.').first == 'hibreed'
  end  
end