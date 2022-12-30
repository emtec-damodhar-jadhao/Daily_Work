// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

Console.Title = "User_Message_Receiver";

var endpointConfiguration = new EndpointConfiguration("User_Service");

var transport = endpointConfiguration.UseTransport<LearningTransport>();
transport.StorageDirectory("C:\\Users\\Damodhar.Jadhao\\Desktop\\NserviceBusApi\\User_Message\\.learningtransport");

endpointConfiguration.EnableInstallers();

var endpointInstance = await Endpoint.Start(endpointConfiguration);   

Console.WriteLine("Press Enter to exit.");
Console.ReadLine();

await endpointInstance.Stop();
