const tree = {
  forks: [
    {
      actor: "DHS",
      label: "How to conduct immigration enforcement in Minneapolis?",
      choices: [
        {
          type: "actual", added: 15, blame: "DHS",
          action: "Deploys 2,000 agents to residential neighborhoods (\"Operation Metro Surge\"). No body cameras. No local police coordination.",
          next: { forks: [
            {
              actor: "Renée Good",
              label: "Good's car is stopped perpendicular to the street, blocking traffic. Agents approach.",
              choices: [
                {
                  type: "actual", added: 1, blame: "Renée Good",
                  action: "Does not move her car out of the road. Remains stopped as agents approach.",
                  next: { forks: [
                    {
                      actor: "Agent Ross",
                      label: "How does Ross approach the stopped vehicle?",
                      choices: [
                        {
                          type: "actual", added: 3, blame: "Agent Ross",
                          action: "Approaches with face covered. Records her plate. Does not identify himself or explain why.",
                          next: { forks: [
                            {
                              actor: "ICE agents (team)",
                              label: "Good says \"I'm not mad at you.\" Partner records. How do other agents engage?",
                              choices: [
                                {
                                  type: "actual", added: 8, blame: "ICE agents",
                                  action: "Multiple agents surround the vehicle. One reaches through the open window, repeatedly orders Good to exit in aggressive language.",
                                  next: { forks: [
                                    {
                                      actor: "Renée Good",
                                      label: "Good is surrounded. An arm is reaching into her car. Partner shouts \"Drive, baby, drive!\"",
                                      choices: [
                                        {
                                          type: "actual", added: 8, blame: "Renée Good",
                                          action: "Reverses briefly, then drives forward turning right — past Agent Ross at the front-left. Vehicle moves into direction of traffic.",
                                          next: { forks: [
                                            {
                                              actor: "Agent Ross",
                                              label: "The vehicle is moving past Ross, turning away.",
                                              choices: [
                                                {
                                                  type: "actual", added: 100, blame: "Agent Ross",
                                                  action: "While holding phone in left hand, draws weapon with right. Fires 3 shots in under 1 second. Hits windshield, driver's window, Good's head. She is killed.",
                                                  next: { forks: [
                                                    {
                                                      actor: "ICE agents (on scene)",
                                                      label: "Good has been shot. How do agents respond?",
                                                      choices: [
                                                        {
                                                          type: "actual", added: 8, blame: "ICE agents",
                                                          action: "Block a physician from providing aid. Some agents leave the scene. Call 911 after ~6 minutes.",
                                                          next: { forks: [
                                                            {
                                                              actor: "DHS leadership",
                                                              label: "How does DHS describe what happened publicly?",
                                                              choices: [
                                                                {
                                                                  type: "actual", added: 7, blame: "DHS",
                                                                  action: "Sec. Noem states Ross was \"hit by the vehicle\" with \"internal bleeding.\" Independent video analyses produce conflicting assessments.",
                                                                  next: { forks: [
                                                                    {
                                                                      actor: "DOJ / FBI",
                                                                      label: "How does the justice system respond?",
                                                                      choices: [
                                                                        {
                                                                          type: "actual", added: 20, blame: "DOJ/FBI",
                                                                          action: "FBI revokes state access to evidence. DOJ does not open civil rights investigation. Opens investigation into Good's widow and city officials. Six federal prosecutors resign.",
                                                                          next: { forks: [
                                                                            {
                                                                              actor: "Democrats",
                                                                              label: "How do Democrats respond legislatively?",
                                                                              choices: [
                                                                                {
                                                                                  type: "actual", added: 10, blame: "Democrats",
                                                                                  action: "Demand ICE reforms (body cams, use-of-force rules). Bundle demands with DHS funding — TSA, FEMA, Coast Guard tied to ICE fight.",
                                                                                  next: { forks: [
                                                                                    {
                                                                                      actor: "Senate Republicans",
                                                                                      label: "Democrats tied TSA funding to ICE reforms. What do Republicans do?",
                                                                                      choices: [
                                                                                        {
                                                                                          type: "actual", added: 15, blame: "Senate Republicans",
                                                                                          action: "Block TSA-only funding bills 10 times. Position: DHS must be funded as a whole with no conditions on ICE.",
                                                                                          next: { forks: [
                                                                                            {
                                                                                              actor: "Trump Admin",
                                                                                              label: "Standoff continues. Does the admin offer an off-ramp?",
                                                                                              choices: [
                                                                                                {
                                                                                                  type: "actual", added: 10, blame: "DHS",
                                                                                                  action: "Offers no concessions on oversight. Sends ICE agents to airports.",
                                                                                                  next: { forks: [
                                                                                                    {
                                                                                                      actor: "DOGE",
                                                                                                      label: "TSA workers are unpaid. Does DOGE help or hurt?",
                                                                                                      choices: [
                                                                                                        {
                                                                                                          type: "actual", added: 8, blame: "DOGE",
                                                                                                          action: "Continues signaling workforce cuts and buyouts while TSA workers already work without pay.",
                                                                                                          next: { forks: [
                                                                                                            {
                                                                                                              actor: "Airlines",
                                                                                                              label: "TSA staffing collapses. Do airlines adapt?",
                                                                                                              choices: [
                                                                                                                {
                                                                                                                  type: "actual", added: 7, blame: "Airlines",
                                                                                                                  action: "Do not adjust cutoffs, rebook, or add staff despite weeks of warning.",
                                                                                                                  endpoint: "DHS shut down Feb 14. 50,000 TSA workers unpaid. 300+ quit. 50% callout in Houston. 2-3 hour security lines. Spring break chaos."
                                                                                                                },
                                                                                                                {
                                                                                                                  type: "alt", added: 0,
                                                                                                                  action: "Move up cutoffs, rebook proactively, surge counter staff.",
                                                                                                                  endpoint: "Lines still long but fewer missed flights. Some chaos absorbed by airline operations."
                                                                                                                }
                                                                                                              ]
                                                                                                            }
                                                                                                          ]}
                                                                                                        },
                                                                                                        {
                                                                                                          type: "alt", added: 0,
                                                                                                          action: "Pauses workforce reduction messaging. Publicly supports TSA workers.",
                                                                                                          endpoint: "Fewer quits and callouts. Lines bad but not catastrophic."
                                                                                                        }
                                                                                                      ]
                                                                                                    }
                                                                                                  ]}
                                                                                                },
                                                                                                {
                                                                                                  type: "alt", added: 0,
                                                                                                  action: "Offers limited concessions: body cameras, updated use-of-force guidelines. Enough for Democrats to pass DHS funding.",
                                                                                                  endpoint: "DHS funded. TSA paid. Airports normal. Both sides claim partial victory."
                                                                                                }
                                                                                              ]
                                                                                            }
                                                                                          ]}
                                                                                        },
                                                                                        {
                                                                                          type: "alt", added: 0,
                                                                                          action: "Pass TSA-only funding. Continue ICE reform negotiations separately.",
                                                                                          endpoint: "TSA funded. Airports normal. Reform debate continues without hostages."
                                                                                        }
                                                                                      ]
                                                                                    }
                                                                                  ]}
                                                                                },
                                                                                {
                                                                                  type: "alt", added: 0,
                                                                                  action: "Fund TSA separately. Pursue ICE reforms on a different legislative track.",
                                                                                  endpoint: "TSA funded. Airports normal. Reform fight continues but without hostages."
                                                                                }
                                                                              ]
                                                                            }
                                                                          ]}
                                                                        },
                                                                        {
                                                                          type: "alt", added: 0,
                                                                          action: "Maintains joint investigation with state BCA. Opens civil rights investigation into the shooting.",
                                                                          endpoint: "Ross faces charges. Prosecutors stay. Public trust maintained. Less political leverage for DHS hostage-taking. TSA likely stays funded."
                                                                        }
                                                                      ]
                                                                    }
                                                                  ]}
                                                                },
                                                                {
                                                                  type: "alt", added: 0,
                                                                  action: "States the shooting is under investigation. Refrains from public characterization until facts established.",
                                                                  endpoint: "Less outrage over perceived cover-up. Investigation has more credibility. Political cascade may still occur but with less fuel."
                                                                }
                                                              ]
                                                            }
                                                          ]}
                                                        },
                                                        {
                                                          type: "alt", added: 0,
                                                          action: "Allow physician to provide aid. Secure scene. Call 911 immediately.",
                                                          endpoint: "Good may still die, but agents seen acting professionally. Less ammunition for cover-up narrative."
                                                        }
                                                      ]
                                                    }
                                                  ]}
                                                },
                                                {
                                                  type: "alt", added: 0,
                                                  action: "Steps aside. Vehicle passes. Notes the plate (already recorded). Reports incident. Follows up through standard channels.",
                                                  endpoint: "Good drives home. May face traffic citation. Nobody dies. No protests. No DHS crisis. No airport lines."
                                                }
                                              ]
                                            }
                                          ]}
                                        },
                                        {
                                          type: "alt", added: 0,
                                          action: "Exits the vehicle as ordered.",
                                          endpoint: "Detained, questioned, released when citizenship confirmed (~30 min). Files complaint. Local news. No death. No national crisis."
                                        }
                                      ]
                                    }
                                  ]}
                                },
                                {
                                  type: "alt", added: 0,
                                  action: "Identify themselves. State purpose. Ask for ID calmly.",
                                  endpoint: "Good provides ID. Citizenship confirmed. ~3 minutes. No escalation."
                                }
                              ]
                            }
                          ]}
                        },
                        {
                          type: "alt", added: 0,
                          action: "Approaches openly, identifies himself as ICE, explains the operation, asks Good to move her vehicle.",
                          endpoint: "Good moves car. Brief interaction. No escalation."
                        }
                      ]
                    }
                  ]}
                },
                {
                  type: "alt", added: 0,
                  action: "Moves her car out of the road when she sees agents approaching.",
                  endpoint: "No obstruction. Agents may not engage. No encounter."
                }
              ]
            }
          ]}
        },
        {
          type: "alt", added: 0,
          action: "Conducts targeted enforcement with warrants, body cameras, and local police coordination instead of a 2,000-agent sweep.",
          endpoint: "Enforcement at normal pace. No confrontation with Good. No shooting. No political crisis. No airport lines."
        }
      ]
    }
  ]
};
