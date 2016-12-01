require 'programr'

brains = Dir.glob("lib/bot/*")

BOT = ProgramR::Facade.new
BOT.learn(brains)